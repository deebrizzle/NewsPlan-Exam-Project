import styled from "styled-components";
import { Box, Paper, Grid } from "@mui/material";

export const MyBox = styled(Box)``;

export const MyGrid = styled(Grid)`
`;

export const Item = styled(Paper)`
  & .MuiPaper-root {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
