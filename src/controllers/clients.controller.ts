import { NextFunction, Request, Response } from "express";
import Clients from "@services/clients.service";

class ClientsController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      await Clients.create(req.body);
      res.status(201).json({ message: "Cliente creado exitosamente" });
    } catch (error) {
      next(error);
    }
  }

  static async read(req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await Clients.getAll({});

      res.status(200).json({ data: clients });
    } catch (error) {
      next(error);
    }
  }

  static async readOne(req: Request, res: Response, next: NextFunction) {
    try {
      const client = await Clients.getById(req.params.id);

      res.status(200).json({ data: client });
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const client = await Clients.updateById(req.params.id, req.body);

      res.status(200).json({ data: client });
    } catch (error) {
      next(error);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      await Clients.deleteById(req.params.id);

      res.status(200).json({ message: "Eliminado con éxito" });
    } catch (error) {
      next(error);
    }
  }
}

export default ClientsController;
