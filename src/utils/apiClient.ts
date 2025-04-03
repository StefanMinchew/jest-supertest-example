import request, { Test } from "supertest";
import { apiUrl } from "../config";
import { roles, UserRole } from "../types/roles";
import TestAgent from "supertest/lib/agent";

export function api(role?: UserRole): TestAgent<Test> {
  const req = request.agent(apiUrl);

  return role && roles[role]
    ? req.set("Authorization", `Bearer ${roles[role]}`)
    : req;
}
