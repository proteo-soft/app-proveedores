import prices from "@dao/price.dao";

import List from "../models/list.model";
import CustomError from "@utils/errors/customError";

class PricesRepository {
  static async bulkCreate(
    data: {
      productId: number;
      listId: number;
      price: number;
    }[]
  ) {
    try {
      let priceNotModified = false;

      for (const pricesData of data) {
        const { price, ...where } = pricesData;
        try {
          await prices.updateOrCreate(where, { price });
        } catch {
          if (!priceNotModified) priceNotModified = true;
        }
      }

      if (priceNotModified)
        CustomError.new({
          message: "No se asignaron los precios",
          statusCode: 400,
          data: null,
        });
    } catch (error) {
      throw error;
    }
  }

  static async create(data: {
    productId: number;
    listId: number;
    price: number;
  }) {
    try {
      const { price, ...where } = data;
      const pricesCreated = await prices.updateOrCreate(where, { price });

      if (!pricesCreated)
        CustomError.new({
          message: "No se asignó el precio",
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
