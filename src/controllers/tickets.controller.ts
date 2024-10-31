import { NextFunction, Request, Response } from "express";
import Tickets from "@services/tickets.service";

class TicketsController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      await Tickets.create(req.body);

      res
        .status(201)
        .json({ message: "Comprobante creado satisfactoriamente" });
    } catch (error) {
      next(error);
    }
  }

  static async read(req: Request, res: Response, next: NextFunction) {
    try {
      const tickets = await Tickets.getAll(req.query);

      res.status(200).json({ data: tickets });
    } catch (error) {
      next(error);
    }
  }
}

export default TicketsController;
