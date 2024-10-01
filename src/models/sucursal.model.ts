import sequelize, { DataTypes, Model } from "../database/connect";

import { ISucursalCreation } from "../interfaces/models/sucursal.interface";
import { IStock } from "@interfaces/models/stock.interface";

import Product from "./product.model";

class Sucursal extends Model implements ISucursalCreation {
  declare id: number;
  declare name: string;
  declare isActive: boolean;
  declare addProduct: (
    product: Product,
    opt: { through: { stock: number } }
  ) => {};

  // Timestamps
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Sucursal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "sucursal",
    freezeTableName: true,
  }
);

export default Sucursal;
