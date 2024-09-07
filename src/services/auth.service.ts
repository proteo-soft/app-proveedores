import Auth from "@repositories/auth.rep";

import { IAuth } from "@interfaces/models/auth.interface";

export default abstract class AuthService {
  static async create(data: IAuth) {
    try {
      await Auth.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return await Auth.getById(id);
    } catch (error) {
      throw error;
    }
  }
}
