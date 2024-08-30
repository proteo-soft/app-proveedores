import {  Router } from "express";
import SuppliersController from "main/controllers/suppliers";

const suppliersRouter = Router();


suppliersRouter.post("/", SuppliersController.create)

suppliersRouter.get("/", SuppliersController.read)
suppliersRouter.get("/:id", SuppliersController.readOne)

suppliersRouter.patch("/:id", SuppliersController.update)

suppliersRouter.delete("/:id", SuppliersController.delete)


export default suppliersRouter;