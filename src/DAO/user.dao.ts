import { IUserDAO } from "@interfaces/user.dao.interface";
import User from "@models/user.model";

export class UserDAO implements IUserDAO {
  async findById(id: number) {
    return await User.findByPk(id);
  }

  async findAll() {
    return await User.findAndCountAll();
  }

  async create(user: User) {
    return await User.create(user);
  }

  async update(id: number, user: User) {
    const [affectedRows] = await User.update(user, { where: { id } });
    return affectedRows;
  }

  async delete(id: number) {
    return await User.destroy({ where: { id } });
  }
}
