import { z } from 'zod';

const usersSchema = z.object({
    fullname: z.string({
        invalid_type_error: "El nombre del usuario debe ser tipo STRING",
        required_error: "Es requerido"
    }).min(1, {message: "Mínimo 1 carácter"}),

    email: z.string({
        invalid_type_error: "El email debe ser tipo STRING",
        required_error: "Es requerido"
    }).email( {message: "El campo email debe ser una dirección de correo válida" }),

    userId: z.string({
        invalid_type_error: "El userId debe ser tipo STRING",
        required_error: "Es requerido"
    }),

    role: z.number({
        invalid_type_error: "El userId debe ser tipo STRING",
    required_error: "Es requerido"
}).int({ message: "El campo role debe ser un número entero" }).min(1, { message: "El campo role debe ser mayor o igual a 1" }),

    isActive: z.boolean({ message: "El campo isActive debe ser un valor booleano" })
});
   
export function validateUser(data){
    return usersSchema.safeParse(data)
}

