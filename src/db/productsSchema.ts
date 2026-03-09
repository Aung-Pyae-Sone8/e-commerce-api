import {
  mysqlTable,
  serial,
  varchar,
  text,
  double,
  int,
} from "drizzle-orm/mysql-core";

export const productsTable = mysqlTable("products", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  image: varchar({ length: 255 }),
  price: double().notNull(),
});
