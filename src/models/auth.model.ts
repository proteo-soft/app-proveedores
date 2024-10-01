import sequelize, { DataTypes, Model } from "../database/connect";
import { IAuthCreation } from "../interfaces/models/auth.interface";

import { User } from "./index.model";

class Auth extends Model implements IAuthCreation {
  declare id: number;
  declare password: string;
  declare userId: number;

  // Timestamps
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Auth.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
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
  },
  {
    sequelize,
    modelName: "auth",
    freezeTableName: true,
  }
);

export default Auth;
