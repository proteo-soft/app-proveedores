export interface ITicketCreation {
  SucursalId: number;
  ProductId: number;
  UserId: number;
  AgentId: number;
  type: string;
}

export interface ITicket extends ITicketCreation {
  id: number;
}
