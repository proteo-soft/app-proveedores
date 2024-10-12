import sequelize, { DataTypes, Model } from "../database/connect";

import { IColorCreation } from "../interfaces/models/color.interface";

class Color extends Model implements IColorCreation {
  declare id: number;
  declare name: string;

  // Timestamps
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Color.init(
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
    modelName: "color",
  }
);

export default Color;
