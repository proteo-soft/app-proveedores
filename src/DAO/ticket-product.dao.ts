import { BaseDAO } from "./base.dao";

import TicketProduct from "@models/ticket-product.model";

class TicketProductDAO extends BaseDAO<TicketProduct> {
  constructor() {
    super(TicketProduct);
  }
}

export default new TicketProductDAO();
