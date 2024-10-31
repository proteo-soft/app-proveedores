import { IAuth, IAuthCreation } from "../interfaces/models/auth.interface";

import authDAO from "@dao/auth.dao";
import { checkErrorType } from "@utils/errors/check-error-type.util";

class AuthRepository {
  static async create(data: IAuthCreation) {
    try {
      await authDAO.create(data);
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getById(id: string | number) {
    try {
      return (await authDAO.findById(Number(id))) as IAuth;
    } catch (error) {
      throw checkErrorType(error);
    }
  }
}

export default AuthRepository;
