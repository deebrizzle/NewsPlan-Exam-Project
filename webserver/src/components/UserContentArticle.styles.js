import styled from "styled-components";
import { Box, Paper } from "@mui/material";

export const MyBox = styled(Box)``;

export const Item = styled(Paper)`
  & .MuiPaper-root {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 155px;
    height: 100px;
    left: 274px;
    top: 1069px;
  }
`;
