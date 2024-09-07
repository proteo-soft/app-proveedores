import { IAuth } from "../interfaces/models/auth.interface";

import authDAO from "../DAO/auth.dao";

class AuthRepository {
  static async create(data: IAuth) {
    try {
      await authDAO.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return await authDAO.findById(parseInt(id));
    } catch (error) {
      throw error;
    }
  }
}

export default AuthRepository;
