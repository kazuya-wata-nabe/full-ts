import { sql } from "drizzle-orm"
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(current_timestamp)`),
})

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("name").notNull(),
  content: text("content").notNull(),
  status: text("status", { enum: ["yet", "progress", "done"] }),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(current_timestamp)`),
})
