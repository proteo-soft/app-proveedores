import sequelize, { DataTypes, Model } from "../database/connect";

import { ISizeCreation } from "../interfaces/models/size.interface";

class Size extends Model implements ISizeCreation {
  declare id: number;
  declare name: string;

  // Timestamps
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Size.init(
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
  },
  {
    sequelize,
    modelName: "size",
  }
);

export default Size;
