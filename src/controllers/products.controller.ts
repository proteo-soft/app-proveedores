import { NextFunction, Request, Response } from "express";
import Products from "@services/products.service";

class ProductsController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.create(req.body);

      res.status(201).json({ message: "Producto creado exitosamente" });
    } catch (error) {
      next(error);
    }
  }

  static async addStock(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.addStock(req.params.id, req.query, req.body);

      res.status(200).json({ message: "Entrada de stock exitosa" });
    } catch (error) {
      next(error);
    }
  }

  static async read(req, res) {
    try {
      const products = await Products.getAll({});

      res.status(200).json({ data: products });
    } catch (error) {}
  }

  static readOne(id) {
    try {
    } catch (error) {}
  }

  static async update(req, res) {
    try {
      const products = await Products.update(req.body);

      res.status(200).json({ data: products });
    } catch (error) {}
  }

  static async updateById(req, res) {
    try {
      const products = await Products.updateById(req.params.id, req.body);

      res.status(200).json({ data: products });
    } catch (error) {}
  }

  static async delete(req, res) {
    try {
      const products = await Products.deleteById(req.params.id);

      res.status(200).json({ data: products });
    } catch (error) {}
  }
}

export default ProductsController;
