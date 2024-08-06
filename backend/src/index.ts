import { Hono } from "hono"
import { createFactory } from "hono/factory"
import { serve } from "@hono/node-server"
import { db } from "@/db"
import { Env } from "@/types"
import { dbInjection } from "./middleware"
import { api } from "./routes"

const factory = createFactory<Env>()
// const dbInjection = factory.createMiddleware(async (c, next) => {
//   c.set("db", db)
//   await next()
// })

const app = new Hono<Env>()
// app.use(dbInjection)
app.use(dbInjection(db))

app.get("/", (c) => c.text("hello hono"))
// TODO: implements auth
app.route("/api", api)

const port = 8000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
