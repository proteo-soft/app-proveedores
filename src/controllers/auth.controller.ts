class AuthController {
  static async register(req, res, next) {
    try {
      res
        .cookie("token", req["token"], {
          maxAge: 7 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          sameSite: "None",
          secure: true,
        })
        .json({
          statusCode: 201,
          message: "Registered!",
        });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      res
        .cookie("token", req["token"], {
          maxAge: 7 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          sameSite: "None",
          secure: true,
        })
        .json({
          statusCode: 200,
          message: "Logged in!",
        });
    } catch (error) {
      next(error);
    }
  }

  static async removeToken(req, res, next) {
    try {
      res.clearCookie("token").json({
        statusCode: 200,
        message: "Cookie deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
