import agents from "../DAO/agent.dao";

import { filterBuilder } from "../utils/filter-builder.util";

class AgentRepository {
  static async getById(id: number) {
    return await agents.findById(id);
  }

  static async getAll(opt) {
    const filters = filterBuilder(opt);

    return await agents.findAll(filters);
  }

  static async getByEmail(email: string) {
    try {
      const agent = await this.findOne({ email });

      return agent;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    return (await agents.create(data)).dataValues;
  }

  static async findOne(where) {
    try {
      const filters = filterBuilder(where);

      return await agents.findOne(filters);
    } catch (error) {
      throw error;
    }
  }

  static async update(where, data) {
    return await agents.update(where, data);
  }

  static async delete(where) {
    return await agents.delete(where);
  }
}

export default AgentRepository;
