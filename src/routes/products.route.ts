import { Router } from "express";
import ProductsController from "@controllers/products.controller";

const productsRouter = Router();

productsRouter.post("/", ProductsController.create);

productsRouter.get("/", ProductsController.read);
productsRouter.get("/:id", ProductsController.readOne);

productsRouter.patch("/:id", ProductsController.update);

productsRouter.delete("/:id", ProductsController.delete);

export default productsRouter;
