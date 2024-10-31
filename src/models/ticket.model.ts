import sequelize, { DataTypes, Model } from "../database/connect";
import { ITicketCreation } from "../interfaces/models/ticket.interface";
import { Sucursal, User, Agent, List } from "./index.model";

class Ticket extends Model implements ITicketCreation {
  declare id: number;
  declare sucursalId: number;
  declare priceId: number;
  declare userId: number;
  declare agentId: number;
  declare listId: number;
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

    listId: {
      type: DataTypes.INTEGER,
      references: {
        model: List,
        key: "id",
      },
      allowNull: false,
    },

    type: {
      type: DataTypes.ENUM,
      values: ["fv", "fc"],
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ticket",
  }
);

export default Ticket;
