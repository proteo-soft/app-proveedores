import { z } from "zod";

const usersSchema = z
  .object({
    fullName: z
      .string({
        invalid_type_error: "El nombre debe ser de tipo texto",
        required_error: "El campo es requerido",
      })
      .min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" })
      .max(50, {
        message: "El nombre tiene que tener como MÁXIMO 50 caracteres",
      }),

    email: z
      .string({
        invalid_type_error: "El nombre debe ser de tipo texto",
        required_error: "El campo es requerido",
      })
      .email({ message: "Debe contener un email válido" }),
  })
  .strict();

type UserShape = z.infer<typeof usersSchema>;

function validateUser(data) {
  return usersSchema.safeParse(data);
}

export { UserShape, validateUser };
