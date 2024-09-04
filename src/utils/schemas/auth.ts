import { z } from "zod";

const authSchema = z.object({
  fullname: z
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

  password: z
    .string({
      invalid_type_error: "La contraseña debe ser de tipo texto",
      required_error: "El campo es requerido",
    })
    .min(6, { message: "La contraseña debe tener como mínimo 6 caracteres" }),
});

export function validateAuth(data) {
  return authSchema.safeParse(data);
}
