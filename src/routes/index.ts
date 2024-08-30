import { Router } from "express";
import ProductsController from "../controllers/index";

const router = Router();

router.get("/products", ProductsController.getAll);
router.get("/products/:id", ProductsController.getById);
router.post("/products", ProductsController.create);
router.post("/products/:id/prices", ProductsController.getPrices);

export default router;
