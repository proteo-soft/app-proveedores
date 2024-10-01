import { NextFunction, Request, Response } from "express";

import sequelize from "../database/connect";

class DbController {
  static async sync(req: Request, res: Response, next: NextFunction) {
    try {
      sequelize.sync({ alter: true });

      res.status(200).send();
    } catch (error) {
      next(error);
    }
  }

  static async drop(req: Request, res: Response, next: NextFunction) {
    try {
      sequelize.sync({ force: true });

      res.status(200).send();
    } catch (error) {
      next(error);
    }
  }
}

export default DbController;
