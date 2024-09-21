import sequelize, { DataTypes, Model } from "../database/connect";

import { IStock } from "../interfaces/models/stock.interface";
import { Product, Sucursal } from "./index.model";

class Stock extends Model implements IStock {
  declare id: number;
  declare stock: number;
  declare ProductId: number;
  declare SucursalId: number;

  // Timestamps
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Stock.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
      allowNull: false,
    },

    sucursalId: {
      type: DataTypes.INTEGER,
      references: {
        model: Sucursal,
        key: "id",
      },
      allowNull: false,
    },

    stock: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Stock",
    freezeTableName: true,
  }
);

export default Stock;
