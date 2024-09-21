import { BaseDAO } from "./base.dao";

import Ticket from "@models/ticket.model";

class TicketDAO extends BaseDAO<Ticket> {
  constructor() {
    super(Ticket);
  }
}

export default new TicketDAO();
