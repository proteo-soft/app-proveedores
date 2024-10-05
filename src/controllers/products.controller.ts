import { NextFunction, Request, Response } from "express";
import Products from "../services/products.service";

class ProductsController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.create(req.body);

      res.status(201).json({ message: "Producto creado éxitosamente" });
    } catch (error) {
      next(error);
    }
  }

  static async read(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Products.getAll({});

      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }

  static async readOne(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await Products.getById(req.params.id);

      res.status(200).json({ data: product });
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Products.update(req.body);

      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await Products.updateById(req.params.id, req.body);

      res.status(200).json({ data: product });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
       await Products.deleteById(req.params.id);

      res.status(200).json({ message: "Eliminado con éxito" });
    } catch (error) {
      next(error);
    }
  }
}

export default ProductsController;
