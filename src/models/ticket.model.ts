import sequelize, { DataTypes } from "main/database/connect";

const Ticket = sequelize.define("ticket", {
  sucursalId: {
    type: DataTypes.STRING,
    references: {
      model: "sucursal",
      key: "id",
    },
  },

  clientId: {
    type: DataTypes.STRING,
    references: {
      model: "clients",
      key: "id",
    },
  },

  userId: {
    type: DataTypes.STRING,
    references: {
      model: "users",
      key: "id",
    },
  },

  type: {
    type: DataTypes.STRING,
    values: ["fv", "fc"],
    defaultValue: "fv",
    allowNull: false,
  },
});

export default Ticket;
