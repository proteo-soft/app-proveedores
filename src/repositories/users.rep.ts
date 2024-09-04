import { IUser } from "../interfaces/user.interface";
import { IUserDAO } from "../interfaces/user.dao.interface";
import { UserDAO } from "../DAO/user.dao";

class UsersRepository {
  private static userDAO: IUserDAO = new UserDAO();

  static async getById(id: number) {
    return await this.userDAO.findById(id);
  }

  static async getAll(filters) {
    return await this.userDAO.findAll();
  }

  static async create(user: IUser) {
    return await this.userDAO.create(user);
  }

  static async update(id: number, user: IUser) {
    return await this.userDAO.update(id, user);
  }

  static async delete(id: number) {
    return await this.userDAO.delete(id);
  }
}

export default UsersRepository;
