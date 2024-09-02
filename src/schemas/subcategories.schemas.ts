import { z } from 'zod';

const subcategoriesSchema = z.object({
    name: z.string({
        invalid_type_error: "El nombre debe ser tipo STRING",
        required_error: "El nombre es requerido"
    }).min(5, {message: "No puede estar vacío, un mínimo de 5 carácteres"}),
});
   
export function validateSubcategories(data){
    return subcategoriesSchema.safeParse(data)
}


