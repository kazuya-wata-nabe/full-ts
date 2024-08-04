import { db } from "@/db/index"
import { tasks } from "@/db/schema"

await db.delete(tasks)
await db.transaction(async (tx) => {
  await tx.insert(tasks).values([
    {
      title: "sample1",
      content: "this is sample1",
      status: "yet",
    },
    {
      title: "sample2",
      content: "this is sample2",
      status: "progress",
    },
    {
      title: "sample3",
      content: "this is sample3",
      status: "done",
    },
  ])
})
