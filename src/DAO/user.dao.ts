import User from "../models/user.model";

import { BaseDAO } from "./base.dao";
class UserDAO extends BaseDAO<User> {
  constructor() {
    super(User);
  }
}

export default new UserDAO();
