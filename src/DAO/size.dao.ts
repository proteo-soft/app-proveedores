import { BaseDAO } from "./base.dao";

import Size from "@models/size.model";

class SizeDAO extends BaseDAO<Size> {
  constructor() {
    super(Size);
  }
}

export default new SizeDAO();
