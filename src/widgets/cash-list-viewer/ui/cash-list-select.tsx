import { TFullCashListItem } from "@/shared/api/models";
import { Autocomplete, TextField } from "@mui/material";

interface ICashListSelect {
  value?: TFullCashListItem[];
  options: TFullCashListItem[];
  onChange: (value: TFullCashListItem[]) => void;
}

export function CashListSelect({ value, options, onChange }: ICashListSelect) {
  return (
    <Autocomplete<TFullCashListItem, true>
      limitTags={2}
      filterSelectedOptions
      disableCloseOnSelect
      value={value}
      multiple
      renderInput={(params) => (
        <TextField {...params} label="Выберите валюту" />
      )}
      options={options}
      getOptionLabel={({ ticker, description }) => `${ticker} - ${description}`}
      onChange={(e, value) => {
        onChange(value);
      }}
      sx={{ width: { md: 500 } }}
    />
  );
}
