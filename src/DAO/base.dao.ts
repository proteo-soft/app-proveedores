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

  async create(data: Attributes<T>) {
    try {
      return await this._model.create(data);
    } catch (error) {
      throw error;
    }
  }

  async update(where: WhereOptions, data: Partial<T>) {
    try {
      const [affectedRows] = await this._model.update(data, {
        where,
      });

      return affectedRows;
    } catch (error) {
      throw error;
    }
  }

  async delete(where: WhereOptions) {
    try {
      const affectedCount = await this._model.destroy({
        where,
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
