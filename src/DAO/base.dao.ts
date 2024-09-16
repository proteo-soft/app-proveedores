import { Attributes, Model, ModelStatic, WhereOptions } from "sequelize";
import CustomError from "@utils/errors/customError";

export abstract class BaseDAO<T extends Model> {
  private model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async findById(id: number) {
    try {
      const data = await this.model.findByPk(id);
      if (!data)
        CustomError.new({
          message: "No existe información para mostrar",
          data: "",
          statusCode: 404,
        });

      return data;
    } catch (error) {
      throw error;
    }
  }

  async findAll(filters) {
    try {
      const data = await this.model.findAndCountAll(filters);
      if (data.count == 0)
        CustomError.new({
          message: "No existe información para mostrar",
          data: "",
          statusCode: 404,
        });

      return data;
    } catch (error) {
      throw error;
    }
  }

  async create(user: Attributes<T>) {
    try {
      return await this.model.create(user);
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, model: Partial<T>) {
    try {
      const [affectedRows] = await this.model.update(model, {
        where: { id } as WhereOptions,
      });

      return affectedRows;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const affectedCount = await this.model.destroy({
        where: { id } as WhereOptions,
      });

      if (affectedCount == 0)
        CustomError.new({
          message: "No se encontró el elemento solicitado",
          data: "",
          statusCode: 404,
        });

      return affectedCount;
    } catch (error) {
      throw error;
    }
  }
}
