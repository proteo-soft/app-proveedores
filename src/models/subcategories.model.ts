import sequelize, { DataTypes } from '../database';

export const Subcategories = sequelize.define('subcategory', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
