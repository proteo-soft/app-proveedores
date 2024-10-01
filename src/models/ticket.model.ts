import sequelize, { DataTypes, Model } from "../database/connect";
import { ITicketCreation } from "../interfaces/models/ticket.interface";
import { Sucursal, User, Agent, Price } from "./index.model";

class Ticket extends Model implements ITicketCreation {
  declare id: number;
  declare SucursalId: number;
  declare PriceId: number;
  declare UserId: number;
  declare AgentId: number;
  declare type: string;

  // Timestamps
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Ticket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    sucursalId: {
      type: DataTypes.INTEGER,
      references: {
        model: Sucursal,
        key: "id",
      },

      allowNull: false,
    },

    agentId: {
      type: DataTypes.INTEGER,
      references: {
        model: Agent,
        key: "id",
      },
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },

    listPriceId: {
      type: DataTypes.INTEGER,
      references: {
        model: Price,
        key: "id",
      },
      allowNull: false,
    },

    type: {
      type: DataTypes.ENUM,
      values: ["fv", "fc"],
      defaultValue: "fv",
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ticket",
  }
);

export default Ticket;
