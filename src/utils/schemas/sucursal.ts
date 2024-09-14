import { z } from "zod";

const sucursalSchema = z.object({
  name: z.string({
    invalid_type_error: "El nombre debe ser de tipo texto",
    required_error: "El campo es requerido",
  }),

  isActive: z
    .boolean({
      invalid_type_error: "isActive debe ser de tipo booleano",
    })
    .optional(),
});

export function validateSucursal(data) {
  return sucursalSchema.safeParse(data);
}
