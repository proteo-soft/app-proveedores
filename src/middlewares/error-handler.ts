import { Response } from "express";

function errorHandler(error, _req, res: Response, _next) {
  const { statusCode, message } = error;

  res.status(statusCode).json({ message });
}

export default errorHandler;
