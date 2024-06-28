import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";

export const StyledRoot = styled(Box)`
  border: 1px solid #e3e5e5;
  border-radius: 8px;
  padding: 22px;
`;

export const StyledImage = styled(Image)`
  border-radius: 100%;
  overflow: hidden;
`;

const StyledTypography = styled(Typography)`
  line-height: 16px;
`;

export const StyledTitle = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StyledPrice = styled(StyledTypography)`
  font-size: 32px;
  font-weight: 700;
` as typeof Typography;

export const StyledPercent = styled(StyledTypography)`
  font-size: 16px;
  color: ${({ value }: { value: number }) =>
    value > 0 ? "#31BD7A" : "#ff5247"};
`;
