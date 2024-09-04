import sequelize, { DataTypes } from '../database/connect';

const Sucursal = sequelize.define('sucursal', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


export default Sucursal