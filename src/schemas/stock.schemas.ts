import { z } from 'zod';

const stockSchema = z.object({})
   
export function validateStock(data){
    return stockSchema.safeParse(data)
}

