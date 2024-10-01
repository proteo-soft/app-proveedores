import { NextFunction, Request, Response } from "express";
import Users from "../services/users.service";

class UsersController {
  static async read(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await Users.getAll(req.query);

      res.status(200).json({ data: users });
    } catch (error) {
      next(error);
    }
  }

  static async readOne(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
