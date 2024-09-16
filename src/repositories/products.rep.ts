import {
  IProductCreation,
  IProduct,
} from "../interfaces/models/product.interface";

import products from "../DAO/product.dao";
import sucursal from "../DAO/sucursal.dao";

import { filterBuilder } from "@utils/filter-builder.util";

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

      return await products.findAll(filters);
    } catch (error) {
      throw error;
    }
  }

  static async create(data: IProductCreation) {
    try {
      const { stock, ...productData } = data;
      const newProduct = await products.create(productData);

      const suc1 = (await sucursal.findById(1))!; // ver si combiene que el usuario tenga una sucursal asignada en la tabla users para que no haya que constantemente mandarle la sucursal
      const product = (await products.findById(newProduct.id))!; // ver si puedo hacer una interfaz para el dao particular del producto

      await product.addSucursal(suc1, {
        through: { stock },
      });
    } catch (error) {
      throw error;
    }
  }

  static async update(id: number, data: IProduct) {
    try {
      return await products.update(id, data);
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
