import { Response } from "express";

function errorHandler(error, _req, res: Response, _next) {
  const { statusCode, message, errors = [], data } = error;

  res.status(statusCode || 500).json({ message: errors[0] || message, data });
}

export default errorHandler;
