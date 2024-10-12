import Agents from "@repositories/agent.rep";

import { validateAgent } from "@utils/schemas/agent";

import CustomError from "@utils/errors/customError";

export default class SuppliersService {
  static async create(data) {
    try {
      const result = validateAgent(data);

      if (!result.success)
        CustomError.new({
          message: "La petición contiene campos inválidos",
          data: result.error,
          statusCode: 400,
        });

      return await Agents.create({ ...result.data, type: "p" });
    } catch (error) {
      throw error;
    }
  }

  static async getAll(opt) {
    try {
      return await Agents.getAll({ ...opt, type: "p" });
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return await Agents.findOne({ id: parseInt(id), type: "p" });
    } catch (error) {
      throw error;
    }
  }

  static async getByEmail(email: string) {
    try {
      return await Agents.getByEmail(email);
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data) {
    try {
      return await Agents.update({ id: parseInt(id), type: "p" }, data);
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string) {
    try {
      return await Agents.delete({ id: parseInt(id), type: "p" });
    } catch (error) {
      throw error;
    }
  }
}
