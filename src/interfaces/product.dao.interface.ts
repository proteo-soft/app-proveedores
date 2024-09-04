import { IProduct } from "./product.interface";

export interface IProductDAO  {
  create(user: IProduct): Promise<IProduct>;
  findAll(): Promise<{ rows: IProduct[] | []; count: number }>;
  findById(id: number): Promise<IProduct | null>;
  update(id: number, user: IProduct): Promise<number>;
  delete(id: number): Promise<number>;
}
