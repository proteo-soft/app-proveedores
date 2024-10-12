import { Router } from "express";
import SuppliersController from "../controllers/suppliers.controller";

const suppliersRouter = Router();

suppliersRouter.post("/", SuppliersController.create);

suppliersRouter.get("/", SuppliersController.read);
suppliersRouter.get("/:id", SuppliersController.readOne);

suppliersRouter.patch("/:id", SuppliersController.updateById);

suppliersRouter.delete("/:id", SuppliersController.deleteById);

export default suppliersRouter;
