import sequelize, { DataTypes } from '../database';

export const Sucursal = sequelize.define('sucursal', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
