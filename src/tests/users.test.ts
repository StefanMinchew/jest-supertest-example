import { db } from "../db";
import { api } from "../utils/apiClient";

let userId: string;

beforeEach(async () => {
  const newUser = {
    name: `User-${Date.now()}`,
    email: `user-${Date.now()}@gmail.com`,
  };
  const response = await api("admin").post("/users").send(newUser);

  expect(response.status).toBe(201);
  userId = response.body.id;

  const dbUser = await db.query("SELECT * FROM users WHERE id = $1", [userId]);
  expect(dbUser.rows.length).toBe(1);
});

afterEach(async () => {
  if (userId) {
    const response = await api("admin").delete(`/users/${userId}`);

    expect(response.status).toBe(204);

    const dbUser = await db.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);
    expect(dbUser.rows.length).toBe(0);
  }
});

describe("Users API Integration Tests", () => {
  it("should retrieve user details", async () => {
    const response = await api("admin").get(`/users/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(userId);
  });

  it("should update user details", async () => {
    const updatedUser = { name: "John Doe" };
    const response = await api("admin")
      .patch(`/users/${userId}`)
      .send(updatedUser);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe(updatedUser.name);

    const dbUser = await db.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);
    expect(dbUser.rows[0].name).toBe(updatedUser.name);
  });
});
