import { beforeEach, expect, it, vi } from "vitest"
import * as repository from "@/repository/tasks"
import { tasks } from "."

beforeEach(() => {
  vi.spyOn(repository, "list").mockReturnValue([])
})

it("sample", async () => {
  const req = await tasks.request("/", {
    method: "GET",
  })
  expect(req.status).toBe(200)

  const data = await req.json()
  expect(data).toEqual([])
})
