import { api } from "../utils/apiClient";
import { UserRole } from "../types/roles";

export class UserService {
  constructor(private role?: UserRole) {}

  createUser(data: object) {
    return api(this.role).post("/users").send(data);
  }

  getUser(userId: string) {
    return api(this.role).get(`/users/${userId}`);
  }

  updateUser(userId: string, data: object) {
    return api(this.role).patch(`/users/${userId}`).send(data);
  }

  deleteUser(userId: string) {
    return api(this.role).delete(`/users/${userId}`);
  }
}
