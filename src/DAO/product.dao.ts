import { BaseDAO } from "./base.dao";

import Product from "@models/product.model";

class ProductDAO extends BaseDAO<Product> {
  constructor() {
    super(Product);
  }
}

export default new ProductDAO();
