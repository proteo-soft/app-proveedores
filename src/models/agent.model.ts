import sequelize, { DataTypes, Model } from "../database/connect";

import { IAgentCreation } from "@interfaces/models/agent.interface";

class Agent extends Model implements IAgentCreation {
  declare id: number;
  declare name: string;
  declare address: string;
  declare phoneNumber: string;
  declare email: string;
  declare locality: string;
  declare type: string;
  declare isActive: boolean;

  // Timestamps
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Agent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

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
      values: ["c", "p"],
      defaultValue: "c",
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Agent",
  }
);

export default Agent;
