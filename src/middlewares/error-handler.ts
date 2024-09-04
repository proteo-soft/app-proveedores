import { Response } from "express";

function errorHandler(error, _req, res: Response, _next) {
  const { statusCode, message, data } = error;

  res.status(statusCode || 500).json({ message, data });
}

export default errorHandler;
