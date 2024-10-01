export interface IStockCreation {
  stock: number;
  productId: number;
  sucursalId: number;
}

export interface IStock extends IStockCreation {
  id: number;
}
