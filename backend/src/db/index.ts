import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"

const url = process.env.DATABASE_URL ?? ""

export const db = drizzle(new Database(url))
