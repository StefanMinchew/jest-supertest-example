import request from "supertest";
import { apiUrl } from "../config";
import { userToken, adminToken } from "../setupTests";

const roles = {
  user: userToken,
  admin: adminToken,
};

export function api(role?: keyof typeof roles) {
  const req = request(apiUrl);
  return role && roles[role]
    ? req.set("Authorization", `Bearer ${roles[role]}`)
    : req;
}
