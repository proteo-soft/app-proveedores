import { sign } from "jsonwebtoken";

export const createToken = (data) =>
  sign(data, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 * 1,
  });
