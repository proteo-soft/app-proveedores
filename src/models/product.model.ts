import sequelize, { DataTypes, Model } from "../database/connect";
import { IProductCreation } from "../interfaces/models/product.interface";

import Sucursal from "./sucursal.model";
import Color from "./color.model";
import Size from "./size.model";
import Stock from "./stock.model";

class Product extends Model implements IProductCreation {
  declare id: number;
  declare name: string;
  declare buy: boolean;
  declare sell: boolean;
  declare cost: number;
  declare isCombo: boolean;
  declare isService: boolean;
  declare isActive: boolean;
  declare sizeId: number;
  declare colorId: number;

  declare addSucursal: (
    sucursal: Sucursal,
    opt: { through: { stock: number } }
  ) => Promise<Stock>;

  // Timestamps
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    buy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    sell: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isService: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isCombo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    cost: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    sizeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Size,
        key: "id",
      },
    },
    colorId: {
      type: DataTypes.INTEGER,
      references: {
        model: Color,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "product",
  }
);

export default Product;
