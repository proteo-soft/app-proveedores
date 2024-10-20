import { Op } from "../database/connect";

import productsDAO from "../DAO/product.dao";
import sucursalDAO from "../DAO/sucursal.dao"; // usar el repo de suc
import stockDAO from "../DAO/stock.dao";
import priceDao from "../DAO/price.dao";

import SucursalRepository from "./sucursal.rep";
import ListsRepository from "./lists.rep";
import PricesRepository from "./prices.rep";
import StockRepository from "./stock.rep";

import { IProductUpdate } from "../interfaces/models/product.interface";

import {
  deleteUndefinedProps,
  filterBuilder,
} from "../utils/filter-builder.util";
import { removeDuplicates } from "../utils/remove-duplicates.util";
import { checkMissingIds } from "../utils/check-missings";
import { checkErrorType } from "../utils/check-error-type.util";

class ProductsRepository {
  static async checkMissings(idsToSearch: number[]) {
    try {
      const listsFound = await productsDAO.findAll({
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

      const suc1 = (await sucursalDAO.findById(sucursalId))!;
      const newProduct = await productsDAO.create(productData);

      // ver ventahjas/desventajas de que al crear un producto se cree autoamticamente el stock en todas las sucursales o ir creando de a poco.

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
      const { sucursalId, ...where } = opt;
      const filters = filterBuilder(where);

      return await productsDAO.findAll({
        ...filters,
        include: [
          {
            model: stockDAO.model,
            // where: deleteUndefinedProps({
            //   sucursalId: opt.sucursalId,
            // }),
            attributes: ["sucursalId", "stock"],
          },
          {
            model: priceDao.model,
            attributes: ["listId", "price"],
          },
        ],
      });
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getById(id: number) {
    try {
      return await productsDAO.findById(id, {
        include: [
          {
            model: stockDAO.model,
            attributes: ["sucursalId", "stock"],
          },
          {
            model: priceDao.model,
            attributes: ["listId", "price"],
          },
        ],
      });
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async individualBulkUpdateById(data: IProductUpdate[]) {
    try {
      const idsNotModified: number[] = [];
      const sucursalIds: any = [];

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

          if (!sucursalIds.includes(where.sucursalId)) {
            // valido si existe esa sucursal antes de agregar/modificar
            await sucursalDAO.findById(where.sucursalId as number);
            sucursalIds.push(where.sucursalId);
          }

          try {
            const changed = await StockRepository.updateById(where, {
              stock: units,
            });

            sucursalIds.push(where.sucursalId);
          
            if (!changed) idsNotModified.push(productData.id); // agrego los ids no modificados de la tabla stock
          } catch (error) {
            idsNotModified.push(productData.id);
          }
        }

        // verifico si no hay información para actualizar en la tabla products, para pasar al siguiente producto
        if (Object.entries(productData).length == 0) continue;

        const affected = await productsDAO.update(
          { id: productData.id },
          productData
        );
        if (!affected) idsNotModified.push(productData.id); // agrego los ids no modificados de la tabla products
      }

      const parsedIds = removeDuplicates(idsNotModified); // saco los ids duplicados

      return { notFound: parsedIds };
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async linealBulkUpdateById(where, data) {
    try {
      const affectedRows = await productsDAO.update(
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
      return await productsDAO.delete({ id });
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

  static async deleteListById(id: number) {
    try {
      return await ListsRepository.deleteById(id);
    } catch (error) {
      throw checkErrorType(error);
    }
  }
}

export default ProductsRepository;
