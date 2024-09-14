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

  static read() {
    try {
    } catch (error) {}
  }

  static readOne(id) {
    try {
    } catch (error) {}
  }

  static update(id, data) {
    try {
    } catch (error) {}
  }

  static delete(id) {
    try {
    } catch (error) {}
  }
}

export default ProductsController;
