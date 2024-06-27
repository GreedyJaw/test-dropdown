export interface ICashListItem {
  ticker: string;
  description: string;
  logoURL: string;
}

export interface ICurrencyRate {
  ticker: string;
  fromCurrency: string;
  price: number;
  dayGainPercent: number;
}

export type TFullCashListItem = ICashListItem &
  Pick<ICurrencyRate, "price" | "dayGainPercent">;
