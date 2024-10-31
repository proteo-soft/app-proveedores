import { IAuth, IAuthCreation } from "../interfaces/models/auth.interface";

import authDAO from "@dao/auth.dao";
import { checkErrorType } from "@utils/errors/check-error-type.util";
import { filterBuilder } from "@utils/filter-builder.util";

class AuthRepository {
  static async create(data: IAuthCreation) {
    try {
      await authDAO.create(data);
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getByUserId(userId: number) {
    try {
      const filters = filterBuilder({ userId });
      return (await authDAO.findOne(filters)) as IAuth;
    } catch (error) {
      throw checkErrorType(error);
    }
  }
}

export default AuthRepository;
