import { TFullCashListItem } from "@/shared/api/models";
import { Grid } from "@mui/material";
import { CashListItem } from "@/widgets/cash-list-viewer/ui/cash-list-item/cash-list-item";

interface ICashList {
  items: TFullCashListItem[];
  onRemove: (ticker: string) => void;
}

export function CashList({ items, onRemove }: ICashList) {
  return (
    <Grid container spacing={{ xs: 3, md: 6 }}>
      {items.map((item) => (
        <Grid key={item.ticker} item xs={12} sm={6} md={4} lg={3}>
          <CashListItem item={item} onRemove={onRemove} />
        </Grid>
      ))}
    </Grid>
  );
}
