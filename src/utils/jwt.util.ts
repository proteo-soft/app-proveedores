import { sign } from "jsonwebtoken";

export const createToken = (data) =>
  sign(data, process.env.JWT_SECRET as string, {
    expiresIn: 60 * 60 * 24 * 1,
  });
