import styled from "styled-components";
import { Grid, Paper } from "@mui/material";
import colors from "../../colors"

export const Item = styled(Paper)`
    color: ${colors.black};
    text-align: center;
    align-self: center;
    margin: 5.5%;

  &. MuiPaper-root.MuiPaper-outlined {
    text-align: center;
    align-self: center;
  }
`;

export const GridContainer = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
`;

export const GridItem = styled(Grid)`
  &. MuiGrid-root {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    text-align: center;
  }

  &. MuiGrid-root.MuiGrid-item {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    text-align: center;
  }
`;