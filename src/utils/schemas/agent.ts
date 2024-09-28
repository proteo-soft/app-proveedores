import { z } from "zod";

const agentsSchema = z.object({
  name: z
    .string({
      invalid_type_error: "El nombre debe ser de tipo texto",
      required_error: "El campo es requerido",
    })
    .min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" })
    .max(50, {
      message: "El nombre tiene que tener como MÁXIMO 50 caracteres",
    }),

  address: z
    .string({
      invalid_type_error: "El nombre debe ser de tipo texto",
    })
    .optional(),

  phoneNumber: z
    .string({
      invalid_type_error: "El nombre debe ser de tipo texto",
    })
    .optional(),

  email: z
    .string({
      invalid_type_error: "El nombre debe ser de tipo texto",
    })
    .email()
    .optional(),

  socialNetwork: z
    .string({
      invalid_type_error: "El nombre debe ser de tipo texto",
    })
    .optional(),

  isActive: z
    .boolean({
      invalid_type_error: "El nombre debe ser de tipo texto",
    })
    .optional(),
});

export function validateAgent(data) {
  return agentsSchema.safeParse(data);
}
