import sequelize, { DataTypes, Model } from "../database/connect";
import { Product, List } from "./index.model";

import { IPriceCreation } from "../interfaces/models/price.interface";

class Price extends Model implements IPriceCreation {
  declare id: number;
  declare ListId: number;
  declare ProductId: number;
  declare price: number;

  // Timestamps
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Price.init(
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

    listId: {
      type: DataTypes.INTEGER,
      references: {
        model: List,
        key: "id",
      },
      allowNull: false,
    },

    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "price",
  }
);

export default Price;
