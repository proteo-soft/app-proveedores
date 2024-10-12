import { BaseDAO } from "./base.dao";

import Sucursal from "../models/sucursal.model";

class SucursalDAO extends BaseDAO<Sucursal> {
  constructor() {
    super(Sucursal);
  }
}

export default new SucursalDAO();
