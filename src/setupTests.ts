import { loginUser } from "./utils/authHelper";
import fs from "fs";
import path from "path";

export let userToken: string;
export let adminToken: string;
const tokenFilePath = path.resolve(__dirname, "./tokens.json");

if (!process.env.TEST_USER_EMAIL || !process.env.TEST_USER_PASSWORD) {
  throw new Error("Missing TEST_USER_EMAIL or TEST_USER_PASSWORD in .env");
}

if (!process.env.TEST_ADMIN_EMAIL || !process.env.TEST_ADMIN_PASSWORD) {
  throw new Error("Missing TEST_ADMIN_EMAIL or TEST_ADMIN_PASSWORD in .env");
}

beforeAll(async () => {
  console.log("Checking for existing tokens...");

  if (fs.existsSync(tokenFilePath)) {
    const tokens = JSON.parse(fs.readFileSync(tokenFilePath, "utf-8"));
    const fileDate = new Date(tokens.date);
    const now = new Date();
    const diffInHours = (now.getTime() - fileDate.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      userToken = tokens.userToken;
      adminToken = tokens.adminToken;
      console.log("Using cached tokens.");
    } else {
      console.log("Tokens expired. Re-login required.");
      await refreshTokens();
    }
  } else {
    console.log("No cached tokens found. Logging in...");
    await refreshTokens();
  }
});

async function refreshTokens() {
  userToken = await loginUser(
    process.env.TEST_USER_EMAIL,
    process.env.TEST_USER_PASSWORD
  );
  adminToken = await loginUser(
    process.env.TEST_ADMIN_EMAIL,
    process.env.TEST_ADMIN_PASSWORD
  );

  const tokens = {
    userToken,
    adminToken,
    date: new Date().toISOString(),
  };
  fs.writeFileSync(tokenFilePath, JSON.stringify(tokens));
  console.log("Tokens refreshed and saved.");
}
