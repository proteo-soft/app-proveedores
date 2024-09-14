import {
  IProductCreation,
  IProduct,
} from "../interfaces/models/product.interface";

import products from "../DAO/product.dao";
import sucursal from "../DAO/sucursal.dao";

import { filterBuilder } from "@utils/filter-builder.util";

class ProductsRepository {
  static async getById(id: number) {
    return await products.findById(id);
  }

  static async getAll(opt) {
    const filters = filterBuilder(opt);

    return await products.findAll(filters);
  }

  static async create(data: IProductCreation) {
    const { stock, ...productData } = data;
    const newProduct = await products.create(productData); // ver si arrojar error desde el dao

    const suc1 = await sucursal.findById(1); // ver si combiene que el usuario tenga una sucursal asignada en la tabla users para que no haya que constantemente mandarle la sucursal
    const product = (await products.findById(newProduct.id)) as any; // ver si puedo hacer una interfaz para el dao particular del producto

    const stockSuc1 = await product["addSucursal"](suc1, {
      through: { stock },
    }); // ver como agregar el metodo a la interfaz del producto
  }

  static async update(id: number, data: IProduct) {
    return await products.update(id, data);
  }

  static async delete(id: number) {
    return await products.delete(id);
  }
}

export default ProductsRepository;
