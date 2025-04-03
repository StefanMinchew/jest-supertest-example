import { db } from "../db";

export async function getUserById(userId: string) {
  return await db.query("SELECT * FROM users WHERE id = $1", [userId]);
}
