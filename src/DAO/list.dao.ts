import { BaseDAO } from "./base.dao";

import List from "@models/list.model";

class ListDAO extends BaseDAO<List> {
  constructor() {
    super(List);
  }
}

export default new ListDAO();
