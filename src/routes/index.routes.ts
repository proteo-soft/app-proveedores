import { Router } from "express";
import usersRouter from "./users.route";
import ticketsRouter from "./tickets.route";
import suppliersRouter from "./suppliers.route";
import sucursalRouter from "./sucursal.route";
import productsRouter from "./products.route";

const router = Router();

router.use("/users",usersRouter);
router.use("/tickets",ticketsRouter);
router.use("/suppliers",suppliersRouter);
router.use("/sucursal",sucursalRouter);
router.use("/products",productsRouter);

export default router;
