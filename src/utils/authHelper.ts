import { api } from "./apiClient";

export async function loginUser(
  email: string,
  password: string
): Promise<string> {
  const response = await api().post("/auth/login").send({ email, password });

  if (response.status !== 200) {
    throw new Error(`Login failed for ${email}`);
  }

  return response.body.access_token;
}
