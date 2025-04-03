import { getUserById } from "../db/userDb";
import { UserService } from "../services/UserService";

let userId: string;
const adminApi = new UserService("admin");

beforeEach(async () => {
  const newUser = {
    name: `User-${Date.now()}`,
    email: `user-${Date.now()}@gmail.com`,
  };
  const response = await adminApi.createUser(newUser);

  expect(response.status).toBe(201);
  userId = response.body.id;

  const dbUser = await getUserById(userId);
  expect(dbUser.rows.length).toBe(1);
});

afterEach(async () => {
  if (userId) {
    const response = await adminApi.deleteUser(userId);

    expect(response.status).toBe(204);

    const dbUser = await getUserById(userId);
    expect(dbUser.rows.length).toBe(0);
  }
});

describe("Users API Integration Tests", () => {
  test("should retrieve user details", async () => {
    const response = await adminApi.getUser(userId);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(userId);
  });

  test("should update user details", async () => {
    const updatedUser = { name: "John Doe" };
    const response = await adminApi.updateUser(userId, updatedUser);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe(updatedUser.name);

    const dbUser = await getUserById(userId);
    expect(dbUser.rows[0].name).toBe(updatedUser.name);
  });
});
