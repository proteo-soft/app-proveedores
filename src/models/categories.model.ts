import sequelize, { DataTypes } from "../database";

export const Categories = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
