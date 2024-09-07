import { Router } from "express";
import auth from "./auth.route";
import users from "./users.route";
import tickets from "./tickets.route";
import suppliers from "./suppliers.route";
import sucursal from "./sucursal.route";
import products from "./products.route";

const router = Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/tickets", tickets);
router.use("/suppliers", suppliers);
router.use("/sucursal", sucursal);
router.use("/products", products);

export default router;
