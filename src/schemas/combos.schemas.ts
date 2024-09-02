import { z } from 'zod';

const combosSchema = z.object({})
   
export function validateCombos(data){
    return combosSchema.safeParse(data)
}
