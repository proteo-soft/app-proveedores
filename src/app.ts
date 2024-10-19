import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import indexRouter from "./routes/index.routes";

import errorHandler from "./middlewares/error-handler";

const app = express();

// MIDDLEWARES

app.use(json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

// ROUTES

app.use("/", indexRouter);

// HANDLERS

app.use(errorHandler);

export default app;
