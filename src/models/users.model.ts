import sequelize, { DataTypes } from "../database";

export const Users = sequelize.define("user", {
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
