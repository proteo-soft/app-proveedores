import prices from "../DAO/price.dao";
import ProductsRepository from "./products.rep";

import List from "../models/list.model";

class PricesRepository {
  static async create(
    data: { productId: number; listId: number; price: number }[]
  ) {
    try {
      return await prices.bulkCreate(data);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(where) {
    try {
      return await prices.findAll({
        ...where,
        attributes: ["productId", "listId", "price", "createdAt", "updatedAt"],
        include: [{ model: List, attributes: ["name"] }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async findOne(where) {
    try {
      return await prices.findOne(where);
    } catch (error) {
      throw error;
    }
  }

  static async updateById(where, data) {
    try {
      await ProductsRepository.getById(where.productId);

      return await prices.updateOrCreate(where, data);
    } catch (error) {
      throw error;
    }
  }
}

export default PricesRepository;
