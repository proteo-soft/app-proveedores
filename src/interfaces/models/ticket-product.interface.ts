export interface ITicketProductCreation {
  TicketId: number;
  productId: number;
  units: number;
}

export interface ITicketProduct extends ITicketProductCreation {
  id: number;
}
