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
      return await Products.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      return await Products.create(data);
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
