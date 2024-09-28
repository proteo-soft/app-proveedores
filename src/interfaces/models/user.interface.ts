export interface IUserCreation {
  fullname: string;
  email: string;
  role?: number;
  isActive?: boolean;
}

export interface IUser extends IUserCreation {
  id: number;
  role: number;
  isActive: boolean;
}
