import { apiFetch } from "./api-fetch";
import { ICurrencyRate } from "@/shared/api/models";

export async function fetchCurrencyRates(currency = "RUB") {
  return apiFetch<ICurrencyRate[]>(
    `public/currency-rates?currency=${currency}`,
  );
}
