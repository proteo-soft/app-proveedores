import { BaseDAO } from "./base.dao";

import Auth from "@models/auth.model";

class AuthDAO extends BaseDAO<Auth> {
  constructor() {
    super(Auth);
  }
}

export default new AuthDAO();
