class CustomError {
  static new({ message, statusCode, data }) {
    const error = new Error();
    error["message"] = message;
    error["statusCode"] = statusCode;
    error["data"] = data;

    throw error;
  }
}

export default CustomError;
