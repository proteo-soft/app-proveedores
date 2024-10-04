export interface IProductCreation {
  name: string;
  cost: number;
  sell: boolean;
  buy: boolean;
  isService: boolean;
  isCombo: boolean;
  isActive: boolean;
  sizeId: number;
  colorId: number;
}

export interface IProduct extends IProductCreation {
  id: number;
}
