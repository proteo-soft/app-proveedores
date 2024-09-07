import {
  CreationAttributes,
  Model,
  ModelStatic,
  WhereOptions,
} from "sequelize";

export abstract class BaseDAO<T extends Model> {
  private model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async findById(id: number) {
    return await this.model.findByPk(id);
  }

  async findAll() {
    return await this.model.findAndCountAll();
  }

  async create(user: CreationAttributes<T>) {
    return await this.model.create(user);
  }

  async update(id: number, model: Partial<T>) {
    const [affectedRows] = await this.model.update(model, {
      where: { id } as WhereOptions,
    });

    return affectedRows;
  }

  async delete(id: number) {
    return await this.model.destroy({
      where: { id } as WhereOptions,
    });
  }
}
