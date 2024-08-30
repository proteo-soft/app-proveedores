import sequelize, { DataTypes } from "../database";

export const ProductsPrices = sequelize.define("productsPrices", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  productId: {
    type: DataTypes.STRING,
    references: {
      model: "products",
      key: "id",
    },
  },

  listId: {
    type: DataTypes.STRING,
    references: {
      model: "lists",
      key: "id",
    },
  },

  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0,
  },
  
});
