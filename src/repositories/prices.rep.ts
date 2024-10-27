import prices from "../DAO/price.dao";
import ProductsRepository from "./products.rep";

import List from "../models/list.model";
import CustomError from "@utils/errors/customError";

class PricesRepository {
  static async create(
    data: { productId: number; listId: number; price: number }[]
  ) {
    try {
      const pricesCreated = await prices.bulkCreate(data);

      if (!pricesCreated.length)
        CustomError.new({
          message: "No se asignaron los precios",
          statusCode: 400,
          data: null,
        });
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

  static async update(where, data) {
    try {
      return await prices.updateOrCreate(where, data);
    } catch (error) {
      throw error;
    }
  }
}

export default PricesRepository;
