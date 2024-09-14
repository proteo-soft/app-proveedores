import { NextFunction, Request, Response } from "express";
import Sucursal from "@services/sucursal.service";

class SucursalController {
  static async create(req, res) {
    try {
      await Sucursal.create(req.body);

      res.json({ message: "sucursal creada" });
    } catch (error) {}
  }

  static read() {
    try {
    } catch (error) {}
  }

  static readOne(id) {
    try {
    } catch (error) {}
  }

  static update(id, data) {
    try {
    } catch (error) {}
  }

  static delete(id) {
    try {
    } catch (error) {}
  }
}

export default SucursalController;
