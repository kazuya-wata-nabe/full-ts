import { db } from "@/db/index"
import { users } from "@/db/schema"

await db.delete(users)
await db.transaction(async (tx) => {
  await tx.insert(users).values([
    {
      name: "Test one",
    },
    {
      name: "Test two",
    },
    {
      name: "Test three",
    },
  ])
})
