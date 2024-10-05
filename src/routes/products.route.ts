import { Router } from "express";
import ProductsController from "../controllers/products.controller";

const productsRouter = Router();

productsRouter.post("/", ProductsController.create);

productsRouter.get("/", ProductsController.read);
productsRouter.get("/:id", ProductsController.readOne);

productsRouter.patch("/", ProductsController.update);
productsRouter.patch("/:id", ProductsController.updateById);

productsRouter.delete("/:id", ProductsController.delete);

export default productsRouter;
