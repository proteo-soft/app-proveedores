import { Router } from "express";
import Clients from "@controllers/clients.controller";

const router = Router();

router.post("/", Clients.create);

router.get("/", Clients.read);
router.get("/:id", Clients.readOne);

router.patch("/:id", Clients.updateById);

router.delete("/:id", Clients.deleteById);

export default router;
