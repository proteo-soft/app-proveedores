import sequelize, { DataTypes, Model } from "../database/connect";
import { IAuth, IAuthCreation } from "../interfaces/models/auth.interface";

class Auth extends Model implements IAuthCreation {
  declare id: number;
  declare password: string;
  declare UserId: number;

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
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Auth",
  }
);

export default Auth;
