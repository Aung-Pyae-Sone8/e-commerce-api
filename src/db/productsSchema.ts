import {
  mysqlTable,
  serial,
  varchar,
  text,
  double,
} from "drizzle-orm/mysql-core";

export const usersTable = mysqlTable("products", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  descriptoin: text(),
  image: varchar({ length: 255 }),
  price: double().notNull(),
});
