import { NextFunction, Request, Response } from "express";
import Products from "../services/products.service";

class ProductsController {
  // PRODUCT

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.create(req.body, req.query);

      res.status(201).json({ message: "Producto creado éxitosamente" });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Products.getAll(req.query);

      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await Products.getById(req.params.id);

      res.status(200).json({ data: product });
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Products.update(req.body, req.query);

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
    } catch (error) {
      next(error);
    }
  }

  // COLORS

  static async createColors(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.createColor(req.body);

      res.status(201).json({ message: "Color creado exitosamente" });
    } catch (error) {
      next(error);
    }
  }

  static async getColors(req: Request, res: Response, next: NextFunction) {
    try {
      const colors = await Products.getColors(req.query);

      res.status(200).json({ data: colors });
    } catch (error) {
      next(error);
    }
  }

  static async updateColorById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const color = await Products.updateColorById(req.params.id, req.body);

      res.status(200).json({ data: color });
    } catch (error) {
      next(error);
    }
  }

  static async deleteColorById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      await Products.deleteColorById(req.params.id);

      res.status(200).json({ message: "Color eliminado exitosamente" });
    } catch (error) {
      next(error);
    }
  }

  // SIZES

  static async createSizes(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.createSize(req.body);

      res.status(201).json({ message: "Talle creado exitosamente" });
    } catch (error) {
      next(error);
    }
  }

  static async getSizes(req: Request, res: Response, next: NextFunction) {
    try {
      const sizes = await Products.getSizes(req.query);

      res.status(200).json({ data: sizes });
    } catch (error) {
      next(error);
    }
  }

  static async updateSizeById(req: Request, res: Response, next: NextFunction) {
    try {
      const size = await Products.updateSizeById(req.params.id, req.body);

      res.status(200).json({ data: size });
    } catch (error) {
      next(error);
    }
  }

  static async deleteSizeById(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.deleteSizeById(req.params.id);

      res.status(200).json({ message: "Talle eliminado exitosamente" });
    } catch (error) {
      next(error);
    }
  }

  // LISTS

  static async createList(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.createList(req.body);

      res.status(201).json({ message: "Lista creada exitosamente" });
    } catch (error) {
      next(error);
    }
  }

  static async getLists(req: Request, res: Response, next: NextFunction) {
    try {
      const lists = await Products.getLists(req.query);

      res.status(200).json({ data: lists });
    } catch (error) {
      next(error);
    }
  }

  static async deleteListById(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.deleteListById(req.params.id);

      res.status(200).json({ message: "Lista elimnada exitosamente" });
    } catch (error) {
      next(error);
    }
  }

  // PRICES

  static async setPrices(req: Request, res: Response, next: NextFunction) {
    try {
      await Products.setPricesById(req.body);

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

  static async getPrices(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Products.getPrices(req.query);

      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }

  static async updatePricesById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      await Products.updatePricesById(req.body);

      res.status(200).json({ message: "Precios modificados correctamente" });
    } catch (error) {
      next(error);
    }
  }

  // STOCK

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
