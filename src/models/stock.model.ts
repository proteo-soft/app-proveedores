import sequelize, { DataTypes } from "../database/connect";

const Stock = sequelize.define(
  "Stock",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    stock: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default Stock;
