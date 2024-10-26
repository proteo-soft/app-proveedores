import { Router } from "express";
import ProductsController from "../controllers/products.controller";

const router = Router();

router.post("/", ProductsController.create);

router.post("/lists", ProductsController.createList);
router.get("/lists", ProductsController.getLists);
router.delete("/lists/:id", ProductsController.deleteListById);

router.post("/colors", ProductsController.createColors);
router.delete("/colors/:id", ProductsController.deleteColorById);

router.post("/sizes", ProductsController.createSizes);
router.delete("/sizes/:id", ProductsController.deleteSizeById);

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
