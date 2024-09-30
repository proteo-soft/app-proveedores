import {
  IProductCreation,
  IProduct,
} from "../interfaces/models/product.interface";

import { Op } from "../database/connect";

import stock from "../DAO/stock.dao";
import products from "../DAO/product.dao";
import sucursal from "../DAO/sucursal.dao";
import prices from "../DAO/price.dao";

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

  static async create(data: IProductCreation) {
    try {
      const { stock, ...productData } = data;
      const newProduct = await products.create(productData);

      const suc1 = (await sucursal.findById(1))!; // ver si combiene que el usuario tenga una sucursal asignada en la tabla users para que no haya que constantemente mandarle la sucursal
      const product = (await products.findById(newProduct.id))!;
      await product.addSucursal(suc1, {
        through: { stock },
      });
    } catch (error) {
      throw error;
    }
  }

  private static async updateJoinTable(
    where,
    data,
    model: typeof stock | typeof prices,
    prop: string
  ) {
    try {
      const updates = {};
      updates[prop] = data; // le digo la propiedad a actualizar de la join table

      const affectedRows = await model.update(where, updates);

      return affectedRows == 0 ? where.productId : null; // verifico si el dato cambió
    } catch (error) {
      throw error;
    }
  }

  static async individualBulkUpdate(data) {
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

          const idNotModified: number | null = await this.updateJoinTable(
            where,
            units,
            stock,
            "stock"
          );

          if (idNotModified) idsNotModified.push(idNotModified); // agrego los ids no modificados de la tabla stock
        }

        const affected = await this.updateById(productData.id, productData);

        if (affected == 0) idsNotModified.push(productData.id); // agrego los ids no modificados de la tabla products
      }

      const parsedIds = removeDuplicates(idsNotModified); // saco los ids duplicados

      return data.length - parsedIds.length;
    } catch (error) {
      throw error;
    }
  }

  static async linealBulkUpdate(where, data) {
    try {
      const affectedRows = await products.update(
        {
          id: { [Op.in]: where.products },
        },
        data
      );
      return affectedRows;
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: number, data: IProduct) {
    try {
      return await products.update({ id }, data);
    } catch (error) {
      throw error;
    }
  }

  static async delete(id: number) {
    try {
      return await products.delete(id);
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsRepository;
