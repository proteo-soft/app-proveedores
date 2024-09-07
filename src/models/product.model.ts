import sequelize, { DataTypes, Model } from "../database/connect";
import { IProduct } from "../interfaces/models/product.interface";

class Product
  extends Model<IProduct, Omit<IProduct, "id">>
  implements IProduct
{
  declare name: string;
  declare email: string;
  declare buy: boolean;
  declare sell: boolean;
  declare cost: number;
  declare isCombo: boolean;
  declare isService: boolean;
  declare isActive: boolean;

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
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default Product;
