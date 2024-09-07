import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";

import Auth from "../services/auth.service";
import Users from "../services/users.service";

import { createHash, verifyPassword, genSalt } from "../utils/hash.util";
import { createToken } from "../utils/jwt.util";

import { validateAuth } from "../utils/schemas";
import CustomError from "../utils/errors/customError";

passport.use(
  "register",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (
      req,
      _email,
      _password,
      done: (error: Error, user?: {}, opt?) => void
    ) => {
      try {
        if (req.body.adminPass != process.env.NEWUSER_PASS)
          CustomError.new({
            message: "Contraseña de administrador inválida",
            data: null,
            statusCode: 401,
          });

        const result = validateAuth(req.body);

        if (!result.success)
          CustomError.new({
            message: "La petición contiene campos inválidos",
            data: result.error,
            statusCode: 400,
          });

        const { data: validateData } = result;
        try {
          await Users.getByEmail(validateData.email);
          return done(null, false, {
            message: "Ya existe un usuario con ese email",
            statusCode: 400,
          });
        } catch (error) {}

        const salt = genSalt();
        const hashPassword = createHash(salt, validateData.password);

        const user = (await Users.create(validateData)).dataValues;
        await Auth.create({ UserId: user.id, password: hashPassword });

        req["token"] = createToken({ email: validateData.email });

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (
      req,
      email,
      incomingPassword,
      done: (error: Error, user?: {}, opt?) => void
    ) => {
      try {
        let user;

        try {
          user = (await Users.getByEmail(email)).rows[0];
        } catch (error) {
          return done(null, false, { message: "Email incorrecto" });
        }

        const { password } = (await Auth.getById(user["id"])).dataValues;

        const [storedSalt] = password.split(":");

        const hashedPassword = createHash(storedSalt, incomingPassword);

        if (!verifyPassword(password, hashedPassword))
          return done(null, false, { message: "Contraseña incorrecta" });

        req["token"] = createToken({ email });

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "jwt",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => req?.cookies["token"],
      ]),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (payload, done) => {
      try {
        let user;

        try {
          user = (await Users.getByEmail(payload.email)).rows[0];
        } catch (error) {
          return done(null, false, { message: "Invalid token" });
        }

        done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;
