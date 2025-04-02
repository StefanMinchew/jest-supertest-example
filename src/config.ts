import dotenv from "dotenv";
dotenv.config();

export const apiUrl = process.env.API_URL || "http://localhost:3000";
export const dbConfig = {
  user: process.env.DB_USER || "postgresUser",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "testDB",
  password: process.env.DB_PASS || "testDBPassword",
  port: Number(process.env.DB_PORT) || 5432,
};
