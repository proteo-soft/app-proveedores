import express, { json } from "express";

import indexRouter from "./routes/index";

import errorHandler from "./middlewares/error-handler";

const app = express();

// MIDDLEWARES

app.use(json());

// ROUTES

app.use("/", indexRouter);

// HANDLERS

app.use(errorHandler);

export default app;
