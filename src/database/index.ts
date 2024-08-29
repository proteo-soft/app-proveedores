import { Sequelize, DataTypes, Op, ModelStatic, Model } from "sequelize";

const sequelize = new Sequelize(`${process.env.DB_URL}`);

sequelize.sync({ force: true });

export default sequelize;
export { DataTypes, Op, ModelStatic, Model };
