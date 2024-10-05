import { NextFunction, Request, Response } from "express";
import Suppliers from "../services/suppliers.service";

class SuppliersController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      await Suppliers.create(req.body);
      res.status(201).json({ message: "Proveedores creado exitosamente" });
    } catch (error) {
      next(error);
    }
  }

  static async read(req, res) {
    try {
      const suppliers = await Suppliers.getAll({});

    res.status(200).json({ data: suppliers });
    } catch (error) {}
  }

  static async readOne(req: Request, res: Response, next: NextFunction) {
    try {
      const supplier = await Suppliers.getById(req.params.id);

      res.status(200).json({ data: supplier });
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const supplier = await Suppliers.update(req.params.id, req.body);

      res.status(200).json({ data: supplier });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await Suppliers.delete(req.params.id);

      res.status(200).json({ message: "Eliminado con éxito" });
    } catch (error) {
      next(error);
    }
  }
}

export default SuppliersController;
