import {
  ISucursalCreation,
  ISucursal,
} from "../interfaces/models/sucursal.interface";

import sucursal from "../DAO/sucursal.dao";

import { filterBuilder } from "@utils/filter-builder.util";

class SucursalRepository {
  static async getById(id: number) {
    try {
      return await sucursal.findById(id);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(opt) {
    try {
      const filters = filterBuilder(opt);

      return await sucursal.findAll(filters);
    } catch (error) {
      throw error;
    }
  }

  static async create(data: ISucursalCreation) {
    try {
      return await sucursal.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async update(id: number, data: ISucursal) {
    try {
      return await sucursal.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  static async delete(id: number) {
    try {
      return await sucursal.delete(id);
    } catch (error) {
      throw error;
    }
  }
}

export default SucursalRepository;
