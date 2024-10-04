import { z } from "zod";

const productsSchema = z.object({
  name: z
    .string({
      invalid_type_error: "El nombre debe ser de tipo texto",
      required_error: "El campo es requerido",
    })
    .min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" })
    .max(50, {
      message: "El nombre tiene que tener como MÁXIMO 50 caracteres",
    }),

  stock: z
    .number({
      invalid_type_error: "El stock debe ser de tipo numérico",
      required_error: "El campo es requerido",
    })
    .nonnegative({
      message: "El stock tiene que ser positivo",
    })
    .int()
    .optional(),

  cost: z
    .number({
      invalid_type_error: "El costo debe ser de tipo numérico",
      required_error: "El campo es requerido",
    })
    .nonnegative({
      message: "El costo debe ser positivo",
    })
    .optional()
    .default(0),

  buy: z
    .boolean({
      invalid_type_error: "buy debe ser de tipo booleano",
    })
    .optional()
    .default(true),

  sell: z
    .boolean({
      invalid_type_error: "sell debe ser de tipo booleano",
    })
    .optional()
    .default(true),

  isService: z
    .boolean({
      invalid_type_error: "isService debe ser de tipo booleano",
    })
    .optional()
    .default(false),

  isCombo: z
    .boolean({
      invalid_type_error: "isCombo debe ser de tipo booleano",
    })
    .optional()
    .default(false),

  isActive: z
    .boolean({
      invalid_type_error: "isActive debe ser de tipo booleano",
    })
    .optional()
    .default(true),

  sizeId: z
    .number({
      invalid_type_error: "SizeId debe ser de tipo numérico",
    })
    .optional(),

  colorId: z
    .number({
      invalid_type_error: "ColorId debe ser de tipo numérico",
    })
    .optional(),

  categoryId: z
    .number({
      invalid_type_error: "CategoryId debe ser de tipo numérico",
    })
    .optional(),

  subcategoryId: z
    .number({
      invalid_type_error: "SubcategoryId debe ser de tipo numérico",
    })
    .optional(),
});

export function validateProduct(data) {
  return productsSchema.safeParse(data);
}
