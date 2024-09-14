import Sucursal from "@repositories/sucursal.rep";

import { validateSucursal } from "@utils/schemas";
import {
  ISucursal,
  ISucursalCreation,
} from "@interfaces/models/sucursal.interface";

import CustomError from "@utils/errors/customError";

export default class SucursalService {
  static async create(data: ISucursalCreation) {
    try {
      const result = validateSucursal(data);
      if (!result.success)
        CustomError.new({
          message: "La petición contiene campos inválidos",
          data: result.error,
          statusCode: 400,
        });

      return await Sucursal.create(result.data as ISucursalCreation);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(opt) {
    try {
      return await Sucursal.getAll(opt);
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return await Sucursal.getById(parseInt(id));
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data: ISucursal) {
    try {
      return await Sucursal.update(parseInt(id), data);
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string) {
    try {
      return await Sucursal.delete(parseInt(id));
    } catch (error) {
      throw error;
    }
  }
}
