import sequelize, { DataTypes } from '../database';

export const Auth = sequelize.define('auth', {
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
