import { Router } from "express";
import SucursalController from "main/controllers/sucursal";

const sucursalRouter = Router();

sucursalRouter.post("/", SucursalController.create);

sucursalRouter.get("/", SucursalController.read);
sucursalRouter.get("/:id", SucursalController.readOne);

sucursalRouter.patch("/:id", SucursalController.update);

sucursalRouter.delete("/:id", SucursalController.delete);

export default sucursalRouter;
