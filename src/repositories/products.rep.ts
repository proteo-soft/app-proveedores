import {
  IProductCreation,
  IProduct,
} from "../interfaces/models/product.interface";

import { Op } from "../database/connect";

import stock from "../DAO/stock.dao";
import products from "../DAO/product.dao";
import sucursal from "../DAO/sucursal.dao";
import prices from "../DAO/price.dao";

import StockRepository from "./stock.rep";

import { filterBuilder } from "@utils/filter-builder.util";
import { removeDuplicates } from "@utils/remove-duplicates.util";

class ProductsRepository {
  static async getById(id: number) {
    try {
      return await products.findById(id);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(opt) {
    try {
      const filters = filterBuilder(opt);

      return await products.findAll({
        ...filters,
        include: [
          { model: sucursal.model, through: { attributes: ["stock"] } },
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  static async getStock(where) {
    try {
      const filters = filterBuilder(where);
      const stock = await StockRepository.findOne(filters);

      return stock;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const { stock: units, ...productData } = data;

      const suc1 = (await sucursal.findById(1))!; // ver si combiene que el usuario tenga una sucursal asignada en la tabla users para que no haya que constantemente mandarle la sucursal
      const newProduct = await products.create(productData);

      if (units)
        await StockRepository.create({
          stock: units,
          sucursalId: suc1.id,
          productId: newProduct.id,
        });
    } catch (error) {
      throw error;
    }
  }

  static async individualBulkUpdateById(data) {
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

        const affected = await this.update(
          { id: productData.id },
          productData,
          {}
        );
        if (!affected) idsNotModified.push(productData.id); // agrego los ids no modificados de la tabla products
      }

      const parsedIds = removeDuplicates(idsNotModified); // saco los ids duplicados

      return parsedIds;
    } catch (error) {
      throw error;
    }
  }

  static async linealBulkUpdateById(where, data) {
    try {
      const affectedRows = await this.update(
        {
          id: { [Op.in]: where.products },
        },
        data,
        {}
      );

      return affectedRows;
    } catch (error) {
      throw error;
    }
  }

  static async update(where, data, opt) {
    try {
      const { stock: units, ...productData } = data;

      let idModified = false;

      if (units) {
        const filters = {
          productId: where.id,
          sucursalId: opt.sucursalId,
        };

        await StockRepository.updateById(filters, {
          stock: units,
        });

        idModified = true;
      }

      if (Object.keys(productData).length > 0) {
        const affected = await products.update(where, productData);

        if (affected > 0) idModified = true;
      }

      return idModified;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id: number) {
    try {
      return await products.delete({ id });
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsRepository;
