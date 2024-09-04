import sequelize, { DataTypes, Model } from "../database/connect";
import { IProduct } from "../interfaces/product.interface";

class Product
  extends Model<IProduct, Omit<IProduct, "id">>
  implements IProduct
{
  public name!: string;
  public email!: string;
  public buy!: boolean;
  public sell!: boolean;
  public cost!: number;
  public isCombo!: boolean;
  public isService!: boolean;
  public isActive!: boolean;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
