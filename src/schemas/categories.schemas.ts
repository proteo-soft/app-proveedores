import { z } from 'zod';

const categoriesSchema = z.object({
    name: z.string({
        invalid_type_error: "El nombre debe ser tipo STRING",
        required_error: "El nombre es requerido"
    }).min(3, {message: "No puede estar vacío, un mínimo de 3 carácteres"}),
})
   
export function validateCategories(data){
    return categoriesSchema.safeParse(data)
}

