import sequelize, { DataTypes, Model } from "../database/connect";
import { ITicketCreation } from "../interfaces/models/ticket.interface";
import { Sucursal, User, Agent } from "./index.model";

class Ticket extends Model implements ITicketCreation {
  declare id: number;
  declare SucursalId: number;
  declare ProductId: number;
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

    SucursalId: {
      type: DataTypes.INTEGER,
      references: {
        model: Sucursal,
        key: "id",
      },

      allowNull: false,
    },

    AgentId: {
      type: DataTypes.INTEGER,
      references: {
        model: Agent,
        key: "id",
      },

      allowNull: false,
    },

    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
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
    modelName: "Ticket",
  }
);

export default Ticket;
