export interface ISucursalCreation {
  name: string;
  isActive?: boolean;
}

export interface ISucursal extends ISucursalCreation {
  id: number;
  isActive: boolean;
}
