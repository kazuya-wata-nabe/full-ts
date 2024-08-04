import { Hono } from "hono"
import { tasks } from "./api/tasks"
import { users } from "./api/users"

export const api = new Hono()

// TODO: implements routes
api.route("/users", users)
api.route("/tasks", tasks)
