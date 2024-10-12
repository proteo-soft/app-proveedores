import { BaseDAO } from "./base.dao";

import price from "../models/price.model";

class priceDAO extends BaseDAO<price> {
  constructor() {
    super(price);
  }
}

export default new priceDAO();
