import { users } from "@/db/schema"
import { DataBase } from "@/types"

export const list = (db: DataBase) => {
  return db.select().from(users)
}
