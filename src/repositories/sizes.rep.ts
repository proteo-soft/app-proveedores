import sizes from "../DAO/size.dao";

import { filterBuilder } from "@utils/filter-builder.util";

class SizesRepository {
  static async getById(id: number) {
    try {
      return await sizes.findById(id);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(opt) {
    try {
      const filters = filterBuilder(opt);

      return await sizes.findAll(filters);
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      return await sizes.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: number, data) {
    try {
      return await sizes.update({ id }, data); // ver de hacer un findByPK y luego usar el metodo delete sobre lo encontrado
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: number) {
    try {
      return await sizes.delete({ id });
    } catch (error) {
      throw error;
    }
  }
}

export default SizesRepository;
