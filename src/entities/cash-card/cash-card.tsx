import { TFullCashListItem } from "@/shared/api/models";
import { Box, Stack } from "@mui/material";
import {
  StyledImage,
  StyledPercent,
  StyledPrice,
  StyledRoot,
  StyledTitle,
} from "@/entities/cash-card/cash-card.styled";

export function CashCard({
  ticker,
  description,
  logoURL,
  price,
  dayGainPercent,
}: TFullCashListItem) {
  const title = `${ticker} - ${description}`;

  return (
    <StyledRoot>
      <Stack gap={3}>
        <StyledImage src={logoURL} alt={description} width={40} height={40} />
        <StyledTitle>{title}</StyledTitle>
        {!!price && (
          <Box display="flex" gap={1} flexWrap="wrap">
            <StyledPrice component="span">{price.toFixed(4)}</StyledPrice>
            <Box mt={0.5}>
              <StyledPercent value={dayGainPercent}>
                {dayGainPercent > 0 && "+"}
                {dayGainPercent}%
              </StyledPercent>
            </Box>
          </Box>
        )}
      </Stack>
    </StyledRoot>
  );
}
