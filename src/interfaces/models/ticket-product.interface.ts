export interface ITicketProductCreation {
  ticketId: number;
  productId: number;
  units: number;
}

export interface ITicketProduct extends ITicketProductCreation {
  id: number;
}
