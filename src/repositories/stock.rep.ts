import stock from "../DAO/stock.dao";

class StockRepository {
  static async create(data: {
    stock: number;
    sucursalId: number;
    productId: number;
  }) {
    try {
      await stock.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(where) {
    try {
      return await stock.findAll({
        ...where,
        attributes: [
          "productId",
          "sucursalId",
          "stock",
          "createdAt",
          "updatedAt",
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  static async findOne(where) {
    try {
      return await stock.findOne({
        ...where,
      });
    } catch (error) {
      throw error;
    }
  }

  static async update(where, data) {
    try {
      return await stock.updateOrCreate(where, data);
    } catch (error) {
      throw error;
    }
  }
}

export default StockRepository;
