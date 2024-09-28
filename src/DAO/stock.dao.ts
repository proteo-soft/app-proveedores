import Stock from "@models/stock.model";
import { BaseDAO } from "./base.dao";

class StockDAO extends BaseDAO<Stock> {
  constructor() {
    super(Stock);
  }
}

export default new StockDAO();
