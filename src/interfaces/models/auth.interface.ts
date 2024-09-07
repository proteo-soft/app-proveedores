export interface IAuthCreation {
  password: string;
  UserId: number;
}

export interface IAuth extends IAuthCreation {
  id: number;
}
