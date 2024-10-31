import { z } from "zod";

const ticketsSchema = z.object({
  listId: z
    .number({
      invalid_type_error: "listId debe ser de tipo numérico",
      required_error: "El campo es requerido",
    })
    .nonnegative({
      message: "listId debe ser positivo",
    }),

  sucursalId: z
    .number({
      invalid_type_error: "sucursalId debe ser de tipo numérico",
      required_error: "El campo es requerido",
    })
    .nonnegative({
      message: "sucursalId debe ser positivo",
    }),

  userId: z
    .number({
      invalid_type_error: "userId debe ser de tipo numérico",
      required_error: "El campo es requerido",
    })
    .nonnegative({
      message: "userId debe ser positivo",
    }),

  agentId: z
    .number({
      invalid_type_error: "agentId debe ser de tipo numérico",
      required_error: "El campo es requerido",
    })
    .nonnegative({
      message: "agentId debe ser positivo",
    }),

  type: z.enum(["fv", "fc"]),
});

export type TicketShape = z.infer<typeof ticketsSchema>;

export function validateTicket(data) {
  return ticketsSchema.safeParse(data);
}
