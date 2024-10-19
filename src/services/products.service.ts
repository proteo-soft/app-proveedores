import Products from "../repositories/products.rep";

import { validateProduct } from "../utils/schemas";
import { IProductCreation } from "../interfaces/models/product.interface";

import CustomError from "../utils/errors/customError";
import { deleteUndefinedProps } from "../utils/filter-builder.util";

export default class ProductsService {
  static async create(data, opt) {
    try {
      const result = validateProduct(data);
      if (!result.success)
        CustomError.new({
          message: "La petición contiene campos inválidos",
          data: result.error,
          statusCode: 400,
        });

      return await Products.create({
        ...result.data,
        sucursalId: opt.sucursalId,
      });
    } catch (error) {
      throw error;
    }
  }

  static async createList(data) {
    try {
      //validar

      await Products.createList(data);
    } catch (error) {
      throw error;
    }
  }

  static async deleteListById(listId: string) {
    try {
      await Products.deleteListById(parseInt(listId));
    } catch (error) {
      throw error;
    }
  }

  static async getAll(data) {
    try {
      return await Products.getAll(data);
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return await Products.getById(parseInt(id));
    } catch (error) {
      throw error;
    }
  }

  static async update(data) {
    try {
      //validar porque se cuelga cuando hay campos inexistentes
      return data.type == "individual"
        ? await Products.individualBulkUpdateById(data.products)
        : await Products.linealBulkUpdateById(data.where, data.updates);
    } catch (error) {
      throw error;
    }
  }

  static async getStockById(productId: string, query) {
    try {
      return await Products.getStock(
        deleteUndefinedProps({
          productId,
          sucursalId: query.sucursalId,
        })
      );
    } catch (error) {
      throw error;
    }
  }

  static async setPricesById(productId: string, pricesData) {
    try {
      const pricesMapped = pricesData.prices.map((data) => {
        return {
          productId: parseInt(productId),
          listId: data.listId,
          price: data.price,
        };
      });

      await Products.setPrices(pricesMapped);
    } catch (error) {
      throw error;
    }
  }

  static async getPricesById(productId: string, query) {
    try {
      return await Products.getPrices({
        productId: parseInt(productId),
        ...query,
      });
    } catch (error) {
      throw error;
    }
  }

  static async getPrices(query) {
    try {
      return await Products.getPrices(query);
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data, query) {
    try {
      return await Products.individualBulkUpdateById([
        { ...query, ...data, id: parseInt(id) },
      ]);
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string) {
    try {
      return await Products.delete(parseInt(id));
    } catch (error) {
      throw error;
    }
  }
}
