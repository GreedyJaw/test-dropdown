import CloseIcon from "@mui/icons-material/Close";
import { CashCard } from "@/entities/cash-card/cash-card";
import { TFullCashListItem } from "@/shared/api/models";
import {
  StyledRemoveButton,
  StyledRoot,
} from "@/widgets/cash-list-viewer/ui/cash-list-item/cash-list-item.styled";

interface ICashListItem {
  item: TFullCashListItem;
  onRemove: (ticker: string) => void;
}

export function CashListItem({ item, onRemove }: ICashListItem) {
  return (
    <StyledRoot>
      <StyledRemoveButton onClick={() => onRemove(item.ticker)}>
        <CloseIcon />
      </StyledRemoveButton>
      <CashCard {...item} />
    </StyledRoot>
  );
}
