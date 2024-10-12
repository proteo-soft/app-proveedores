import { Router } from "express";
import Users from "../controllers/users.controller";

const usersRouter = Router();

usersRouter.get("/", Users.read);
usersRouter.get("/:id", Users.readOne);
usersRouter.patch("/:id", Users.update);
usersRouter.delete("/:id", Users.delete);

export default usersRouter;
