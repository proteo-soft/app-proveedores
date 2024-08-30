import { Router } from "express";
import UsersController from "main/controllers/users";

const usersRouter = Router();

usersRouter.post("/", UsersController.create)

usersRouter.get("/", UsersController.read)
usersRouter.get("/:id", UsersController.readOne)

usersRouter.patch("/:id", UsersController.update)

usersRouter.delete("/:id", UsersController.delete)

export default usersRouter;
