import sequelize, { DataTypes } from "../database";

export const ProductsPrices = sequelize.define("products_prices", {
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
      model: "prices_lists",
      key: "id",
    },
  },

  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0,
  },
  
});
