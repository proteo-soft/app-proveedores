import sequelize, { DataTypes, Model } from "../database/connect";
import { IAuth } from "../interfaces/models/auth.interface";

class Auth extends Model<IAuth, Omit<IAuth, "id">> implements IAuth {
  declare password: string;

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
