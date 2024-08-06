import { Hono } from "hono"
import { list } from "@/repository/tasks"
import { Env } from "@/types"

export const tasks = new Hono<Env>()

tasks.get("/", async (c) => {
  const rows = list(c.var.db)
  return c.json(rows)
})
