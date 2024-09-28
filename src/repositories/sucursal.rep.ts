import {
  ISucursalCreation,
  ISucursal,
} from "../interfaces/models/sucursal.interface";

import sucursal from "../DAO/sucursal.dao";

import { filterBuilder } from "@utils/filter-builder.util";

class SucursalRepository {
  static async getById(id: number) {
    return await sucursal.findById(id);
  }

  static async getAll(opt) {
    const filters = filterBuilder(opt);

    return await sucursal.findAll(filters);
  }

  static async create(data: ISucursalCreation) {
    return (await sucursal.create(data)).dataValues as ISucursal;
  }

  static async update(id: number, data: ISucursal) {
    return await sucursal.update(id, data);
  }

  static async delete(id: number) {
    return await sucursal.delete(id);
  }
}

export default SucursalRepository;
