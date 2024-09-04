import sequelize, { DataTypes } from 'main/database/connect';

const ClientSupplier = sequelize.define('clientsSuppliers', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  locality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  type: {
    type: DataTypes.ENUM,
    values: ["c", "s"],
    defaultValue: "c",
    allowNull: false,
  },
});

export default ClientSupplier
