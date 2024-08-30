import { Products, PricesLists, ProductsPrices } from "../models/index.model";

class ProductsService {
  static async getAll() {
    try {
      return await Products.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const product = await Products.findByPk(id);
      const list: any = await PricesLists.findByPk(id);

      return await list.addProduct(product);
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      await PricesLists.create(data);
      return await Products.create({...data, stock:10});
    } catch (error) {
      throw error;
    }
  }

  static async getPrices(id: string) {
    try {
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsService;
