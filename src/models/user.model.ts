import sequelize, { DataTypes,Model } from "../database/connect";
import { IUser } from '../interfaces/user.interface';

class User extends Model<IUser, Omit<IUser, 'id'>> implements IUser {
  public fullname!: string;
  public email!: string;
  public role!: number;
  public isActive!: boolean;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  },
  {
    sequelize, 
    modelName: 'User', 
  },
);

export default User