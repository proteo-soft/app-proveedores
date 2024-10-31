export interface ITicketCreation {
  sucursalId: number;
  userId: number;
  agentId: number;
  listId: number;
  type: string;
}

export interface ITicket extends ITicketCreation {
  id: number;
}
