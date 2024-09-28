import sequelize, { DataTypes, Model } from "../database/connect";

import { ISucursalCreation } from "../interfaces/models/sucursal.interface";

class Sucursal extends Model implements ISucursalCreation {
  declare id: number;
  declare name: string;
  declare isActive: boolean;

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
    modelName: "Sucursal",
    freezeTableName: true,
  }
);

export default Sucursal;
