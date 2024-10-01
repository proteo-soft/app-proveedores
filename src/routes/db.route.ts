// ROUTER

import { Router } from "express";

// CONTROLLER

import Db from "@controllers/db.controller";

// ROUTES

const router = Router();

router.post("/sync", Db.sync);
router.post("/drop", Db.drop);

export default router;
