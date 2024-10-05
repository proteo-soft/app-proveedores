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
      const user = await this.getAll({ email });

      if (!user.rows[0]) throw new Error("No encontrado");

      return user.rows[0].dataValues;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) { 
    return (await agents.create(data)).dataValues;
  }

  static async update(id: number, data) {
    return await agents.update({ id }, data);
  }

  static async delete(id: number) {
    return await agents.delete({ id });
  }
}

export default AgentRepository;
