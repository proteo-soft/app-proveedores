import Products from "@repositories/products.rep";

import { validateProduct } from "@utils/schemas";
import {
  IProduct,
  IProductCreation,
} from "@interfaces/models/product.interface";

import CustomError from "@utils/errors/customError";

export default class UsersService {
  static async create(data: IProductCreation) {
    try {
      const result = validateProduct(data);
      if (!result.success)
        CustomError.new({
          message: "La petición contiene campos inválidos",
          data: result.error,
          statusCode: 400,
        });

      return await Products.create(result.data as IProductCreation);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(opt) {
    try {
      return await Products.getAll(opt);
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

  static async updateById(id: string, data) {
    try {
      return await Products.update({ id: parseInt(id) }, data);
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
