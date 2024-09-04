import sequelize, { DataTypes, Model } from "../database/connect";
import { IUser } from "../interfaces/user.interface";

class User extends Model<IUser, Omit<IUser, "id">> implements IUser {
  declare fullname: string;
  declare email: string;
  declare role: number;
  declare isActive: boolean;

  // Timestamps
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;
