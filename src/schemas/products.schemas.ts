import { z } from "zod";

const productsSchema = z.object({
  name: z.string({
      invalid_type_error: "El nombre debe ser tipo STRING",
      required_error: "El nombre es requerido",
    }).min(3, { message: "No puede estar vacío, mínimo 3 caracteres" }),
  buy: z.boolean({
      invalid_type_error: "Debe ser un valor booleano",
      required_error: "Es requerido",
    }).default(true),
  sell: z.boolean({
      invalid_type_error: "Debe ser un valor booleano",
      required_error: "Es requerido",
    }).default(true),
    isService: z.boolean({
    invalid_type_error: "Debe ser un valor booleano",
      required_error: "Es requerido",
    }).default(false),
    isCombo: z.boolean({
        invalid_type_error: "Debe ser un valor booleano",
        required_error: "Es requerido",
      }).default(false),
      isActive: z.boolean({
        invalid_type_error: "Debe ser un valor booleano",
        required_error: "Es requerido",
      }).default(true),
      cost: z.number({
        invalid_type_error: "cost debe ser tipo NÚMERO",
        required_error: "Es requerido",
      }).positive({ message: "El costo debe ser mayor a cero" }),  
});


export function validateProducts(data) {
  return productsSchema.safeParse(data);
}

