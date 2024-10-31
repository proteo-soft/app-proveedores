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

  static async getByUserId(userId: number) {
    try {
      return await Auth.getByUserId(userId);
    } catch (error) {
      throw error;
    }
  }
}
