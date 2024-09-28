export interface IPriceCreation {
  ProductId: number;
  ListId: number;
  price: number;
}

export interface IPriceProduct extends IPriceCreation {
  id: number;
}
