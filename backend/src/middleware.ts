import { createMiddleware } from "hono/factory"
import { DataBase } from "./types"

export const dbInjection = (db: DataBase) => {
  return createMiddleware(async (c, next) => {
    c.set("db", db)
    await next()
  })
}
