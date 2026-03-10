import { createInsertSchema } from "drizzle-zod"
import { usersTable } from "../db/usersSchema"

export const createUserSchema = createInsertSchema(usersTable).omit({
    id: true,
    role: true,
})
export const loginUserSchema = createInsertSchema(usersTable).pick({
    email: true,
    password: true,
})