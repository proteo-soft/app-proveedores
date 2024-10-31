import { Router } from "express";
import ProductsController from "../controllers/products.controller";

const router = Router();

router.post("/", ProductsController.create);

router.post("/lists", ProductsController.createList);
router.get("/lists", ProductsController.getLists);
router.delete("/lists/:id", ProductsController.deleteListById);

router.post("/colors", ProductsController.createColors);
router.get("/colors", ProductsController.getColors);
router.patch("/colors/:id", ProductsController.updateColorById);
router.delete("/colors/:id", ProductsController.deleteColorById);

router.post("/sizes", ProductsController.createSizes);
router.get("/sizes", ProductsController.getSizes);
router.patch("/sizes/:id", ProductsController.updateSizeById);
router.delete("/sizes/:id", ProductsController.deleteSizeById);

router.put("/prices", ProductsController.setPrices);
router.get("/prices", ProductsController.getPrices);
router.get("/:id/prices", ProductsController.getPricesById);
router.patch("/:id/prices", ProductsController.updatePricesById);

router.get("/:id/stock", ProductsController.getStockById);

router.get("/", ProductsController.read);
router.get("/:id", ProductsController.getById);

router.patch("/", ProductsController.update);
router.patch("/:id", ProductsController.updateById);

router.delete("/:id", ProductsController.delete);

export default router;
