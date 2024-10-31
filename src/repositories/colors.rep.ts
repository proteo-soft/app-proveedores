import colors from "../DAO/color.dao";

import { filterBuilder } from "@utils/filter-builder.util";

class ColorsRepository {
  static async getById(id: number) {
    try {
      return await colors.findById(id);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(opt) {
    try {
      const filters = filterBuilder(opt);

      return await colors.findAll(filters);
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      return await colors.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: number, data) {
    try {
      return await colors.update({ id }, data);
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: number) {
    try {
      return await colors.delete({ id });
    } catch (error) {
      throw error;
    }
  }
}

export default ColorsRepository;
