export interface IAuthCreation {
  password: string;
  userId: number;
}

export interface IAuth extends IAuthCreation {
  id: number;
}
