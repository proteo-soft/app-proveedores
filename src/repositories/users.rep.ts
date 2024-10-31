import { IUserCreation, IUser } from "../interfaces/models/user.interface";

import users from "../DAO/user.dao";

import { filterBuilder } from "@utils/filter-builder.util";
import { checkErrorType } from "@utils/errors/check-error-type.util";

class UsersRepository {
  static async getById(id: number) {
    return await users.findById(id);
  }

  static async getAll(opt) {
    const filters = filterBuilder(opt);

    return await users.findAll(filters);
  }

  static async getByEmail(email: string) {
    try {
      const user = await this.getAll({ email });

      if (!user.rows[0]) throw new Error("Usuario no encontrado");

      return user.rows[0].dataValues as IUser;
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async create(data: IUserCreation) {
    return (await users.create(data)).dataValues as IUser;
  }

  static async update(id: number, data: IUser) {
    return await users.update({ id }, data);
  }

  static async delete(id: number) {
    return await users.delete({ id });
  }
}

export default UsersRepository;
