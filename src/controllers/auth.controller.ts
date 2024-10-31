class AuthController {
  static async register(req, res, next) {
    try {
      res.status(200).json({
        statusCode: 201,
        message: "Registered!",
        token: req["token"],
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      res.status(200).json({
        statusCode: 200,
        message: "Logged in!",
        token: req["token"],
      });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
