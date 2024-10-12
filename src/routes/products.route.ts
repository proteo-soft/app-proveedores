import { Router } from "express";
import ProductsController from "../controllers/products.controller";

const productsRouter = Router();

productsRouter.post("/", ProductsController.create);

productsRouter.post("/list", ProductsController.createList);
productsRouter.post("/:id/prices", ProductsController.setPricesById);

productsRouter.get("/:id/stock", ProductsController.getStockById);
productsRouter.get("/:id/prices", ProductsController.getPricesById);

productsRouter.get("/", ProductsController.read);

productsRouter.patch("/", ProductsController.update);
productsRouter.patch("/:id", ProductsController.updateById);

productsRouter.delete("/:id", ProductsController.delete);
productsRouter.delete("/list/:id", ProductsController.deleteListById);

export default productsRouter;
