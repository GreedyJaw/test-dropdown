import { fetchCurrencyRates } from "@/shared/api/fetch-currency-rates";
import { fetchCashList } from "@/shared/api/fetch-cash-list";
import { TFullCashListItem } from "@/shared/api/models";

export async function fetchFullCashList(currency = "RUB") {
  const [cashList = [], currencyRates = []] = await Promise.all([
    fetchCashList(),
    fetchCurrencyRates(currency),
  ]);

  const finalCurrencyRates = currencyRates.map(
    ({ fromCurrency, price, dayGainPercent }) => ({
      fromCurrency,
      price,
      dayGainPercent,
    }),
  );

  return cashList
    .map(({ ticker, description, logoURL }) => ({
      ticker,
      description,
      logoURL,
      ...finalCurrencyRates?.find(
        ({ fromCurrency }) => fromCurrency === ticker,
      ),
    }))
    .filter(
      (item) => !!item && item.ticker !== currency,
    ) as TFullCashListItem[];
}
