import { Router } from "express";
import Tickets from "../controllers/tickets.controller";

const router = Router();

router.post("/", Tickets.create);

router.get("/", Tickets.read);

export default router;
