import { IProductDAO } from "@interfaces/product.dao.interface";
import Product from "@models/product.model";

export class ProductDAO implements IProductDAO {
  async findById(id: number) {
    return await Product.findByPk(id);
  }

  async findAll() {
    return await Product.findAndCountAll();
  }

  async create(product: Product) {
    return await Product.create(product);
  }

  async update(id: number, product: Product) {
    const [affectedRows] = await Product.update(product, { where: { id } });
    return affectedRows;
  }

  async delete(id: number) {
    return await Product.destroy({ where: { id } });
  }
}
