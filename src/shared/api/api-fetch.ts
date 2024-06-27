import { backendBaseUrl } from "@/shared/config/backend";

export async function apiFetch<T extends any>(route = "") {
  try {
    const response = await fetch(`${backendBaseUrl}${route}`);

    return (await response.json()) as T;
  } catch (e) {
    console.log(e);
  }
}
