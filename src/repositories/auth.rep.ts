import { IAuth, IAuthCreation } from "../interfaces/models/auth.interface";

import authDAO from "../DAO/auth.dao";

class AuthRepository {
  static async create(data: IAuthCreation) {
    try {
      await authDAO.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string | number) {
    try {
      return (await authDAO.findById(Number(id))) as IAuth;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthRepository;
