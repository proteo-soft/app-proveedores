import sequelize, { DataTypes, Model } from "../database/connect";

import { IStock } from "../interfaces/models/stock.interface";

class Stock extends Model implements IStock {
  declare id: number;
  declare stock: number;

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

    stock: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Stock",
    freezeTableName: true,
  }
);

export default Stock;
