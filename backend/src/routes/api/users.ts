import { Hono } from "hono"
import { list } from "@/repository/users"
import { Env } from "@/types"

export const users = new Hono<Env>()

users.get("/", async (c) => {
  const rows = list(c.var.db)
  return c.json(rows)
})
