import Stock from "../models/stock.model";
import { BaseDAO } from "./base.dao";

import Product from "../models/product.model";

class ProductDAO extends BaseDAO<Product> {
  private _stockModel = Stock;

  get stock() {
    return this._stockModel;
  }

  constructor() {
    super(Product);
  }
}

export default new ProductDAO();
