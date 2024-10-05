import Users from "../repositories/users.rep";

import { validateUser } from "../utils/schemas";
import { IUser, IUserCreation } from "../interfaces/models/user.interface";

import CustomError from "../utils/errors/customError";

export default class UsersService {
  static async create(data: IUserCreation) {
    try {
      const result = validateUser(data);
      if (!result.success)
        CustomError.new({
          message: "La petición contiene campos inválidos",
          data: result.error,
          statusCode: 400,
        });

      return await Users.create(result.data as IUserCreation);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(opt) {
    try {
      return await Users.getAll(opt);
    } catch (error) {
      throw error;
    }
  }

  static async getByEmail(email: string) {
    try {
      const user = await Users.getByEmail(email);

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return await Users.getById(parseInt(id));
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data: IUser) {
    try {
      return await Users.update(parseInt(id), data);
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string) {
    try {
      return await Users.delete(parseInt(id));
    } catch (error) {
      throw error;
    }
  }
}
