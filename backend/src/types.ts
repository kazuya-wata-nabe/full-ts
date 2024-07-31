import { type BetterSQLite3Database } from "drizzle-orm/better-sqlite3"

export type DataBase = BetterSQLite3Database

export type Env = {
  Variables: {
    db: DataBase
  }
}
