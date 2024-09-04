import Users from "@repositories/users.rep";

import { validateUser, UserShape } from "@utils/schemas";
import { IUser } from "@interfaces/user.interface";

import CustomError from "@utils/errors/customError";

export default class UsersService {
  static async create(data: IUser) {
    try {
      const result = validateUser(data);
      if (!result.success)
        CustomError.new({
          message: "La petición contiene campos inválidos",
          data: result.error,
          statusCode: 400,
        });
      
      return await Users.create(result.data as UserShape);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(opt) {
    try {
      const { limit, offset, fullname, ...where } = opt;

      if (!limit || limit > 50) opt.limit = 50;
      if (!offset) opt.offset = 0;

      const filters = {
        limit: opt.limit,
        offset: opt.offset,
        where: where,
      };

      // if (fullname) parte del repo
      //   filters.where.fullname = {
      //     [Op.iLike]: `%${fullname}%`,
      //   };

      return await Users.getAll(filters);
    } catch (error) {
      throw error;
    }
  }

  static async getByEmail(email) {
    try {
      const user = await this.getAll({ email });

      if (!user.rows[0]) throw new Error("Usuario no encontrado");

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
