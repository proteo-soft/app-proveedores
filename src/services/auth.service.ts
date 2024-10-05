import Auth from "../repositories/auth.rep";
import { IAuthCreation } from "../interfaces/models/auth.interface";

export default abstract class AuthService {
  static async create(data: IAuthCreation) {
    try {
      await Auth.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string | number) {
    try {
      return await Auth.getById(id);
    } catch (error) {
      throw error;
    }
  }
}
