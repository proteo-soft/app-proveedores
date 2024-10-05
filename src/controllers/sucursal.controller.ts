import { NextFunction, Request, Response } from "express";
import Sucursal from "@services/sucursal.service";

class SucursalController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      await Sucursal.create(req.body);

      res.status(201).json({ message: "Producto creado éxitosamente" });
    } catch (error) {
      next(error);
    }
  }

  static async read(req: Request, res: Response, next: NextFunction) {
    try {
      const sucursales = await Sucursal.getAll({});

      res.status(200).json({ data: sucursales });
    } catch (error) {
      next(error);
    }
  }

  static async readOne(req: Request, res: Response, next: NextFunction) {
    try {
      const sucursal = await Sucursal.getById(req.params.id);

      res.status(200).json({ data: sucursal });
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) { 
    try {
      const sucursal = await Sucursal.updateById(req.params.id, req.body);

      res.status(200).json({ data: sucursal });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try { 
      await Sucursal.deleteById(req.params.id);

      res.status(200).json({ message: "Eliminado con éxito" });
    } catch (error) {
      next(error);
    }
  }
}

export default SucursalController;
