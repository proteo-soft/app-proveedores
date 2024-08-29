import { NextFunction, Request, Response } from "express";
import Products from "../services/index";

class ProductsController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await Products.getAll();

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await Products.getById(req.params.id);

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await Products.create(req.body);

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async getPrices(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await Products.getPrices(req.params.id);

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

export default ProductsController;
