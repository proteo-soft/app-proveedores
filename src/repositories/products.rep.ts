import {
  IProductCreation,
  IProduct,
} from "../interfaces/models/product.interface";

import stock from "../DAO/stock.dao";
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

  static async updateStock(
    SucursalId: number,
    ProductId: number,
    newStock: number
  ) {
    try {
      const productStock = await stock.findOne({
        where: {
          ProductId,
          SucursalId: SucursalId || 1,
        },
      });

      const actualStock = (await productStock.update({ stock: newStock }))
        .stock;

      return productStock.stock != actualStock ? true : false;
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

  static async update(productId: number, data: IProduct) {
    try {
      return await products.update(productId, data);
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
