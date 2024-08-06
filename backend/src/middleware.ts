import { Context, Next } from "hono"
import { DataBase } from "./types"

export const dbInjection = (db: DataBase) => async (c: Context, next: Next) => {
  c.set("db", db)
  await next()
}
