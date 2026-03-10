import { mysqlTable, varchar, serial, text } from "drizzle-orm/mysql-core";

export const usersTable = mysqlTable("users", {
    id: serial().primaryKey(),
    email: varchar({length: 255}).notNull().unique(),
    password: varchar({length: 255}).notNull(),
    role: varchar({length: 255}).notNull().default('user'),
    name: varchar({length: 255}),
    address: text(),
})