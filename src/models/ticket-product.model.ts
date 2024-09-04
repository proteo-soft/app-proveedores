import sequelize, { DataTypes } from "main/database/connect";

const TicketProduct = sequelize.define("ticketsProducts", {
  ticketId: {
    type: DataTypes.STRING,
    references: {
      model: "tickets",
      key: "id",
    },
  },

  productId: {
    type: DataTypes.STRING,
    references: {
      model: "products",
      key: "id",
    },
  },

  units: {
    type: DataTypes.INTEGER,
  },
});

export default TicketProduct;
