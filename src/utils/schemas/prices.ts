import { z } from "zod";

const pricesSchema = z.object({
  productId: z.number({
    invalid_type_error: "El id del producto debe ser de tipo numerico",
    required_error: "El campo es requerido",
  }),

  listId: z.number({
    invalid_type_error: "El id de la lista debe ser de tipo numerico",
    required_error: "El campo es requerido",
  }),

  price: z.number({
    invalid_type_error: "El precio debe ser de tipo numerico",
    required_error: "El campo es requerido",
  }),
});

export type PricesShape = z.infer<typeof pricesSchema>;

export function validatePrices(data) {
  return pricesSchema.safeParse(data);
}
