import sequelize, { DataTypes, Model } from "../database/connect";

import { IStockCreation } from "../interfaces/models/stock.interface";
import { Product, Sucursal } from "./index.model";

class Stock extends Model implements IStockCreation {
  declare id: number;
  declare stock: number;
  declare productId: number;
  declare sucursalId: number;

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
    modelName: "stock",
    freezeTableName: true,
  }
);

export default Stock;
