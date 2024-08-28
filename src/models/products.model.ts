import sequelize, { DataTypes } from "../database";

export const Products = sequelize.define("product", {
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
});
