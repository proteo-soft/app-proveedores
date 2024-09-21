import sequelize, { DataTypes, Model } from "../database/connect";
import { Ticket, Product } from "./index.model";

import { ITicketProductCreation } from "@interfaces/models/ticket-product.interface";

class TicketProduct extends Model implements ITicketProductCreation {
  declare id: number;
  declare TicketId: number;
  declare productId: number;
  declare units: number;

  // Timestamps
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

TicketProduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    ticketId: {
      type: DataTypes.INTEGER,
      references: {
        model: Ticket,
        key: "id",
      },

      allowNull: false,
    },

    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
      allowNull: false,
    },

    units: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "TicketsProducts",
    freezeTableName: true,
  }
);

export default TicketProduct;
