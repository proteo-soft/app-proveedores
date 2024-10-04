import stock from "../DAO/stock.dao";
import ProductsRepository from "./products.rep";
import SucursalRepository from "./sucursal.rep";

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

  static async updateById(where, data) {
    try {
      await SucursalRepository.getById(where.sucursalId);
      await ProductsRepository.getById(where.productId);

      return await stock.updateOrCreate(where, data);
    } catch (error) {
      throw error;
    }
  }
}

export default StockRepository;
