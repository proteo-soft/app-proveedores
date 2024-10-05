import CustomError from "./errors/customError";

export function checkErrorType(error) {
  try {
    console.log(error);

    switch (error.name) {
      case "SequelizeForeignKeyConstraintError":
        CustomError.new({
          message: "Elemento no encontrado",
          statusCode: 404,
          data: error.parent.detail,
        });
        break;

      case "SequelizeUniqueConstraintError":
        CustomError.new({
          message: "Ya existe el elemento",
          statusCode: 400,
          data: error.errors[0].message,
        });
        break;

      default:
        CustomError.new({
          message: error.message,
          statusCode: 500,
          data: "",
        });
        break;
    }
  } catch (error) {
    throw error;
  }
}
