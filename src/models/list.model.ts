import sequelize, { DataTypes, Model } from "../database/connect";
import { IListCreation } from "../interfaces/models/list.interface";

class List extends Model implements IListCreation {
  declare id: number;
  declare name: string;
  declare isActive: boolean;

  // Timestamps
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

List.init(
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

    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "list",
  }
);

export default List;
