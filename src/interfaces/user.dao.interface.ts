import { IUser } from "./user.interface";

export interface IUserDAO  {
  create(user: IUser): Promise<IUser>;
  findAll(): Promise<{ rows: IUser[] | []; count: number }>;
  findById(id: number): Promise<IUser | null>;
  update(id: number, user: IUser): Promise<number>;
  delete(id: number): Promise<number>;
}
