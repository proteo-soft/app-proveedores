import { IUserCreation, IUser } from "../interfaces/models/user.interface";

import userDAO from "../DAO/user.dao";

import { filterBuilder } from "@utils/filter-builder.util";

class UsersRepository {
  static async getById(id: number) {
    return await userDAO.findById(id);
  }

  static async getAll(opt) {
    const filters = filterBuilder(opt);

    return await userDAO.findAll(filters);
  }

  static async getByEmail(email: string) {
    try {
      const user = await this.getAll({ email });

      if (!user.rows[0]) throw new Error("Usuario no encontrado");

      return user.rows[0].dataValues as IUser;
    } catch (error) {
      throw error;
    }
  }

  static async create(user: IUserCreation) {
    return (await userDAO.create(user)).dataValues as IUser;
  }

  static async update(id: number, user: IUser) {
    return await userDAO.update(id, user);
  }

  static async delete(id: number) {
    return await userDAO.delete(id);
  }
}

export default UsersRepository;
