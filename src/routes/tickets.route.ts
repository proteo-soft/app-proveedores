import { Router } from "express";
import Tickets from "../controllers/tickets.controller";

const ticketsRouter = Router();

ticketsRouter.post("/", Tickets.create);
ticketsRouter.get("/", Tickets.read);
ticketsRouter.get("/:id", Tickets.readOne);
ticketsRouter.patch("/:id", Tickets.update);
ticketsRouter.delete("/:id", Tickets.delete);

export default ticketsRouter;
