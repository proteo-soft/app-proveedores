import { IUser } from "../interfaces/models/user.interface";

import userDAO from "../DAO/user.dao";

class UsersRepository {
  static async getById(id: number) {
    return await userDAO.findById(id);
  }

  static async getAll(filters) {
    return await userDAO.findAll();
  }

  static async create(user: IUser) {
    return await userDAO.create(user);
  }

  static async update(id: number, user: IUser) {
    return await userDAO.update(id, user);
  }

  static async delete(id: number) {
    return await userDAO.delete(id);
  }
}

export default UsersRepository;
