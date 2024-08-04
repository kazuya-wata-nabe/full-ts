import { tasks } from "@/db/schema"
import { DataBase } from "@/types"

export const list = (db: DataBase) => {
  return db.select().from(tasks).all()
}
