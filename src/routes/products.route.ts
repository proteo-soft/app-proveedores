import { Router } from "express";
import ProductsController from "../controllers/products.controller";

const router = Router();

router.post("/", ProductsController.create);


router.post("/list", ProductsController.createList);
router.delete("/list/:id", ProductsController.deleteListById);

router.post("/:id/prices", ProductsController.setPricesById);
router.get("/prices", ProductsController.getPrices);
router.get("/:id/prices", ProductsController.getPricesById);

router.get("/:id/stock", ProductsController.getStockById);

router.get("/", ProductsController.getAll);
router.get("/:id", ProductsController.getById);

router.patch("/", ProductsController.update);
router.patch("/:id", ProductsController.updateById);

router.delete("/:id", ProductsController.delete);

export default router;
