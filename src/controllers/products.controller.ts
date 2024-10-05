import { NextFunction, Request, Response } from "express";
import Products from "@services/products.service";

class ProductsController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.create(req.body, req.query);

      res.status(201).json({ message: "Producto creado exitosamente" });
    } catch (error) {
      next(error);
    }
  }

  static async read(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Products.getAll(req.query);

      res.status(200).json({ data: products });
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
      const products = await Products.updateById(
        req.params.id,
        req.body,
        req.query
      );

      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Products.deleteById(req.params.id);

      res.status(200).json({ data: products });
    } catch (error) {}
  }

  static async createList(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.createList(req.body);

      res.status(201).json({ message: "Lista creada exitosamente" });
    } catch (error) {
      next(error);
    }
  }

  static async setPricesById(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.setPricesById(req.params.id, req.body);

      res.status(200).json({ message: "precios asignados correctamente" });
    } catch (error) {
      next(error);
    }
  }

  static async getPricesById(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Products.getPricesById(req.params.id, req.query);

      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }

  static async getStockById(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Products.getStockById(req.params.id, req.query);

      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }
}

export default ProductsController;
