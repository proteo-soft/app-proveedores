class CustomError {
  static new({ message, data, statusCode }) {
    const error = new Error();
    error["message"] = message;
    error["statusCode"] = statusCode;
    error["data"] = data;

    throw error;
  }
}

export default CustomError;
