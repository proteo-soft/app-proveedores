import { z } from 'zod';

const ticketsSchema = z.object({
    sucursalId: z.string({
        invalid_type_error: "El nombre de la sucursal debe ser tipo STRING",
        required_error: "Es requerido"
    }).min(1, {message: "Mínimo 1 carácter"}),

    clientId: z.string({
        invalid_type_error: "El nombre de la sucursal debe ser tipo STRING",
        required_error: "Es requerido"
    }).min(1, {message: "Mínimo 1 carácter"}),

    userId: z.string({
        invalid_type_error: "El nombre de la sucursal debe ser tipo STRING",
        required_error: "Es requerido"
    }).min(1, {message: "Mínimo 1 carácter"}),
    
    type: z.string({
        invalid_type_error: "El nombre de la sucursal debe ser tipo STRING",
        required_error: "Es requerido"
    }).min(1, {message: "Mínimo 1 carácter"}),
});
   
export function validateTickets(data){
    return ticketsSchema.safeParse(data)
}
