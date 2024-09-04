import sequelize, { DataTypes } from "../database/connect";

const ProductPrice = sequelize.define("productsPrices", {
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

export default ProductPrice;
