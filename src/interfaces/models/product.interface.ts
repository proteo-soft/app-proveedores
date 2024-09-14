export interface IProductCreation {
  name: string;
  cost?: number;
  sell?: boolean;
  buy?: boolean;
  isService?: boolean;
  isCombo?: boolean;
  isActive?: boolean;
}

export interface IProduct {
  id: number;
  cost: number;
  sell: boolean;
  buy: boolean;
  isService: boolean;
  isCombo: boolean;
  isActive: boolean;
}
