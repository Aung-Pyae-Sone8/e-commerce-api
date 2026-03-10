import { productsTable } from '../db/productsSchema';
import { createInsertSchema } from 'drizzle-zod';
import {z} from 'zod';

// export const createProductInsertSchema = z.object({
//     name: z.string({message: "Name is required"}),
//     price: z.number({message: 'Price should be a number'}),
// })

export const createProductInsertSchema = createInsertSchema(productsTable).omit({
    id: true
})

