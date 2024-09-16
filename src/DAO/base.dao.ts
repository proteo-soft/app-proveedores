import { Attributes, Model, ModelStatic, WhereOptions } from "sequelize";
import CustomError from "@utils/errors/customError";

export abstract class BaseDAO<T extends Model> {
  private _model: ModelStatic<T>;

  get model() {
    return this._model;
  }

  constructor(model: ModelStatic<T>) {
    this._model = model;
  }

  async findOne(filters) {
    try {
      const data = await this._model.findOne(filters);
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

  async findById(id: number) {
    try {
      const data = await this._model.findByPk(id);
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
      const data = await this._model.findAndCountAll(filters);

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
      return await this._model.create(user);
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, model: Partial<T>) {
    try {
      const [affectedRows] = await this._model.update(model, {
        where: { id } as WhereOptions,
      });

      return affectedRows;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const affectedCount = await this._model.destroy({
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
