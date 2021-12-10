import styled from "styled-components";
import { Grid, Paper } from "@mui/material";
import colors from "./colors"

export const Item = styled(Paper)`
  & .MuiPaper-root {
    color: ${colors.P1GreyLightBlue};
    background-color:  ${colors.P1GreyLightBlue};
    border: 1px solid ${colors.P1LightPetroleum};
    box-sizing: border-box;
    borderRadius: 8px;
    text-align: center;
    align-self: center;
    margin: auto;
  }

  &. MuiPaper-root.MuiPaper-outlined {
    border: 1px solid ${colors.P1GreyLightBlue};
    text-align: center;
    align-self: center;
    margin: auto;
  }

`;

export const GridContainer = styled(Grid)`
  &. MuiGrid-root {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
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