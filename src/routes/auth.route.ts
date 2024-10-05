// ROUTER

import { Router } from "express";

// MIDDLEWARES

import passport from "../middlewares/passportCb.mid";

// CONTROLLER

import Auth from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/signup", passport("register"), Auth.register);
authRouter.post("/signin", passport("login"), Auth.login);
authRouter.delete("/cookie", passport("jwt"), Auth.removeToken);

export default authRouter;
