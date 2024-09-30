import { Router } from "express";

import "@models/index.model"; // El interprete lee primero el modelo auth y quiere importar users de index.model(que todavía no cargó) y exporta a User(index) como undefined

import db from "./db.route";
import auth from "./auth.route";
import users from "./users.route";
import tickets from "./tickets.route";
import suppliers from "./suppliers.route";
import sucursal from "./sucursal.route";
import products from "./products.route";

const router = Router();

router.use("/db", db);
router.use("/auth", auth);
router.use("/users", users);
router.use("/tickets", tickets);
router.use("/suppliers", suppliers);
router.use("/sucursal", sucursal);
router.use("/products", products);

export default router;
