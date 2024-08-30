import { Router } from "express";
import usersRouter from "./users";
import ticketsRouter from "./tickets";
import suppliersRouter from "./suppliers";
import sucursalRouter from "./sucursal";
import productsRouter from "./products";

const router = Router();

router.use("/users",usersRouter);
router.use("/tickets",ticketsRouter);
router.use("/suppliers",suppliersRouter);
router.use("/sucursal",sucursalRouter);
router.use("/products",productsRouter);

export default router;
