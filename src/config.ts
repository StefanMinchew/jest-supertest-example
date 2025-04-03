import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();

export const apiUrl = process.env.API_URL || "http://localhost:3000";
export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});
