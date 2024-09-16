import { Sequelize, DataTypes, Op, ModelStatic, Model } from "sequelize";

const sequelize = new Sequelize(`${process.env.DB_URL}`);

// sequelize.sync({ alter: true });

export default sequelize;
export { DataTypes, Op, ModelStatic, Model };
import "../models/index.model";
