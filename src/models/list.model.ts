import sequelize, { DataTypes } from "../database/connect";

const PriceList = sequelize.define("list", {
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

export default PriceList