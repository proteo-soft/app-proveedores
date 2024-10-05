import { Op } from "../database/connect";

import products from "../DAO/product.dao";
import sucursal from "../DAO/sucursal.dao"; // usar el repo de suc

import SucursalRepository from "./sucursal.rep";
import StockRepository from "./stock.rep";
import ListsRepository from "./lists.rep";
import PricesRepository from "./prices.rep";

import { IProductUpdate } from "@interfaces/models/product.interface";

import { filterBuilder } from "@utils/filter-builder.util";
import { removeDuplicates } from "@utils/remove-duplicates.util";
import { checkMissingIds } from "@utils/check-missings";
import { checkErrorType } from "@utils/check-error-type.util";

class ProductsRepository {
  static async checkMissings(idsToSearch: number[]) {
    try {
      const listsFound = await products.findAll({
        where: {
          id: {
            [Op.in]: idsToSearch,
          },
        },
      });

      checkMissingIds(listsFound.rows, idsToSearch);
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async create(data) {
    try {
      const { stock: units, sucursalId, ...productData } = data;

      const suc1 = (await sucursal.findById(sucursalId))!;
      const newProduct = await products.create(productData);

      if (units)
        await StockRepository.create({
          stock: units,
          sucursalId: suc1.id,
          productId: newProduct.id,
        });
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getAll(opt) {
    try {
      const filters = filterBuilder(opt);

      return await products.findAll({
        ...filters,
      });
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getById(id: number) {
    try {
      return await products.findById(id);
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async individualBulkUpdateById(data: IProductUpdate[]) {
    try {
      const idsNotModified: number[] = [];

      for (const product of data) {
        const {
          stock: units,
          listId,
          sucursalId,
          price,
          ...productData
        } = product;

        if (units) {
          const where = { sucursalId, productId: productData.id };

          try {
            const changed = await StockRepository.updateById(where, {
              stock: units,
            });

            if (!changed) idsNotModified.push(productData.id); // agrego los ids no modificados de la tabla stock
          } catch (error) {
            idsNotModified.push(productData.id);
          }
        }

        // verifico si no hay información para actualizar en la tabla products, para pasar al siguiente producto
        if (Object.entries(productData).length == 0) continue;

        const affected = await products.update(
          { id: productData.id },
          productData
        );
        if (!affected) idsNotModified.push(productData.id); // agrego los ids no modificados de la tabla products
      }

      const parsedIds = removeDuplicates(idsNotModified); // saco los ids duplicados

      return parsedIds;
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async linealBulkUpdateById(where, data) {
    try {
      const affectedRows = await products.update(
        {
          id: { [Op.in]: where.products },
        },
        data
      );

      return affectedRows;
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async delete(id: number) {
    try {
      return await products.delete({ id });
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getStock(where) {
    try {
      const filters = filterBuilder(where);
      const stock = await StockRepository.getAll(filters);

      return stock;
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async createList(data) {
    try {
      await ListsRepository.create(data);
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async setPrices(
    data: { productId: number; listId: number; price: number }[]
  ) {
    try {
      // const priceListIds = data.map((data) => data.listId);
      // await ListsRepository.checkMissings(priceListIds);

      // const productIds = data.map((data) => data.productId);
      // await this.checkMissings(productIds);

      await PricesRepository.create(data);
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getPrices(where) {
    try {
      const filters = filterBuilder(where);

      return await PricesRepository.getAll(filters);
    } catch (error) {
      throw checkErrorType(error);
    }
  }
}

export default ProductsRepository;
