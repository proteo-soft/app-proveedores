export interface IProductCreation {
  name: string;
  stock: number;
  cost: number;
  sell: boolean;
  buy: boolean;
  isService: boolean;
  isCombo: boolean;
  isActive: boolean;
}

export interface IProduct extends IProductCreation {
  id: number;
  sizeId: number;
  colorId: number;
}
