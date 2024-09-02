import { z } from 'zod';

const authSchema = z.object({
    password: z.string({
        invalid_type_error: "La contraseña debe ser tipo STRING",
        required_error: "La contraseña es requerida"
    }).min(8, {message: "La contraseña no puede estar vacía"}),
})
   
export function validateAuth(data){
    return authSchema.safeParse(data)
}