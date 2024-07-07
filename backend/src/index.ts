import { Hono } from "hono"

const app = new Hono()

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

app.get("/users", (c) => {
  return c.json({ hoge: "foo" })
})

export default app
