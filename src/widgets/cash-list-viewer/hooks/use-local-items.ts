import { TFullCashListItem } from "@/shared/api/models";

export function useLocalItems() {
  const updateItems = (items: TFullCashListItem[]) => {
    localStorage.setItem(
      "selectedCashList",
      JSON.stringify(items.map(({ ticker }) => ticker)),
    );
  };

  const getItems = () => {
    const localItems = localStorage.getItem("selectedCashList");

    if (!localItems) {
      return;
    }

    try {
      return JSON.parse(localItems);
    } catch (e) {
      console.log(e);
    }
  };

  return { updateItems, getItems };
}
