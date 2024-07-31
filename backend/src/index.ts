import { Hono } from "hono"
import { createFactory } from "hono/factory"
import { serve } from "@hono/node-server"
import { Env } from "@/types"
import { db } from "./db"
import { users } from "./db/schema"

const factory = createFactory<Env>()
const dbInjection = factory.createMiddleware(async (c, next) => {
  c.set("db", db)
  await next()
})

const app = new Hono<Env>()
app.use(dbInjection)

app.get("/", (c) => {
  return c.text("hello hono")
})

app.get("/users", (c) => {
  const rows = c.var.db.select().from(users).all()
  return c.json(rows)
})

const port = 8000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
