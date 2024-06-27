import { apiFetch } from "./api-fetch";
import { ICashListItem } from "@/shared/api/models";

export async function fetchCashList() {
  return apiFetch<ICashListItem[]>("cash-list");
}
