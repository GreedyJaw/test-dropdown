import { Box, Button, styled } from "@mui/material";

export const StyledRoot = styled(Box)`
  position: relative;
`;

export const StyledRemoveButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  min-width: 0;
  color: #000;
  &:hover {
    color: #ff5247;
  }
`;
