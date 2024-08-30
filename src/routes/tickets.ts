import {  Router } from "express";
import TicketsController from "main/controllers/tickets";

const ticketsRouter = Router();


ticketsRouter.post("/", TicketsController.create)

ticketsRouter.get("/", TicketsController.read)
ticketsRouter.get("/:id", TicketsController.readOne)

ticketsRouter.patch("/:id", TicketsController.update)

ticketsRouter.delete("/:id", TicketsController.delete)

export default ticketsRouter;