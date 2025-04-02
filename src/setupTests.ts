import { loginUser } from "./utils/authHelper";

export let userToken: string;
export let adminToken: string;

if (!process.env.TEST_USER_EMAIL || !process.env.TEST_USER_PASSWORD) {
  throw new Error("Missing TEST_USER_EMAIL or TEST_USER_PASSWORD in .env");
}

if (!process.env.TEST_ADMIN_EMAIL || !process.env.TEST_ADMIN_PASSWORD) {
  throw new Error("Missing TEST_ADMIN_EMAIL or TEST_ADMIN_PASSWORD in .env");
}

beforeAll(async () => {
  console.log("Logging in test users...");
  userToken = await loginUser(
    process.env.TEST_USER_EMAIL,
    process.env.TEST_USER_PASSWORD
  );
  adminToken = await loginUser(
    process.env.TEST_ADMIN_EMAIL,
    process.env.TEST_ADMIN_PASSWORD
  );
});
