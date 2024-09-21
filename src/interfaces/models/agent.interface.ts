export interface IAgentCreation {
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  locality: string;
  isActive: boolean;
  type: string;
}

export interface IAgent extends IAgentCreation {
  id: number;
}
