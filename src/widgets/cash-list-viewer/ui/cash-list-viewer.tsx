import { CashListSelect } from "@/widgets/cash-list-viewer/ui/cash-list-select";
import { CashList } from "@/widgets/cash-list-viewer/ui/cash-list";
import { useEffect, useRef, useState } from "react";
import { TFullCashListItem } from "@/shared/api/models";
import { Box } from "@mui/material";
import { useLocalItems } from "@/widgets/cash-list-viewer/lib/use-local-items";

interface ICashListViewer {
  options: TFullCashListItem[];
  initialValues?: string[];
  onChange?: (value: TFullCashListItem[]) => void;
}

export function CashListViewer({
  initialValues = [],
  options,
}: ICashListViewer) {
  const { getItems, updateItems } = useLocalItems();
  const [selectedItems, setSelectedItems] = useState<TFullCashListItem[]>([]);
  const isFirstLoad = useRef(true);

  const handleRemove = (ticker: string) => {
    setSelectedItems((prevState) =>
      prevState.filter((item) => item.ticker !== ticker),
    );
  };

  useEffect(() => {
    const localItems = getItems();

    const finalInitialValues = localItems ?? initialValues ?? [];

    setSelectedItems(
      options.filter(({ ticker }) => finalInitialValues.includes(ticker)),
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues, options]);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    updateItems(selectedItems);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems]);

  return (
    <>
      <Box mb={6}>
        <CashListSelect
          value={selectedItems}
          options={options}
          onChange={setSelectedItems}
        />
      </Box>
      <CashList items={selectedItems} onRemove={handleRemove} />
    </>
  );
}
