import { Sequelize, DataTypes, Op, ModelStatic, Model } from "sequelize";

const sequelize = new Sequelize(`${process.env.DB_URL}`, {
  define: {
    hooks: {
      async beforeDestroy(row, opt) {
        const model = opt["model"];
        const product = await model.findOne({
          where: { id: row.dataValues.id },
          include: [{ all: true }],
        });
        console.log(product);

        throw new Error("hola");
      },
    },
  },
});

export default sequelize;
export { DataTypes, Op, ModelStatic, Model };
