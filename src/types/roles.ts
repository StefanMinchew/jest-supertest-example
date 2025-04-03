import { userToken, adminToken } from "../setupTests";

export type UserRole = "user" | "admin" | undefined;

export const roles: Record<UserRole, string | undefined> = {
  user: userToken,
  admin: adminToken,
};
