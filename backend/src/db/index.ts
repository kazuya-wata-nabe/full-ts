import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"

const url = process.env.DATABASE_URL ?? ""
const logger = process.env.NODE_ENV !== "production"

export const db = drizzle(new Database(url), { logger })
