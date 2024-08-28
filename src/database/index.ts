import { Sequelize, DataTypes, Op, ModelStatic, Model } from "sequelize";

const sequelize = new Sequelize(`${process.env.DB_DATA}`);

sequelize.sync();

export default sequelize;
export { DataTypes, Op, ModelStatic, Model };
