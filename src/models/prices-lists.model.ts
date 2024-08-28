import sequelize, { DataTypes } from "../database";

export const PricesLists = sequelize.define("prices_lists", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});
