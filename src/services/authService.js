import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";

export async function login(email, password) {
  await http.post(apiEndpoint, { email, password });
}

export function logout() {
  localStorage.removeItem("token");
}

export default { login, logout };
