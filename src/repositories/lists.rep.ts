import { Op } from "../database/connect";

import lists from "../DAO/list.dao";

import { filterBuilder } from "../utils/filter-builder.util";
import { checkMissingIds } from "../utils/check-missings";

class ListsRepository {
  static async checkMissings(idsToSearch) {
    try {
      const listsFound = await lists.findAll({
        where: {
          id: {
            [Op.in]: idsToSearch,
          },
        },
      });

      checkMissingIds(listsFound.rows, idsToSearch);
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: number) {
    try {
      return await lists.findById(id);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(opt) {
    try {
      const filters = filterBuilder(opt);

      return await lists.findAll(filters);
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      return await lists.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async update(id: number, data) {
    try {
      return await lists.update({ id }, data);
    } catch (error) {
      throw error;
    }
  }

  static async delete(id: number) {
    try {
      return await lists.delete({ id });
    } catch (error) {
      throw error;
    }
  }
}

export default ListsRepository;