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

  static async updateById(id: string, data: IProduct) {
    try {
      return await Products.update(parseInt(id), data);
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
