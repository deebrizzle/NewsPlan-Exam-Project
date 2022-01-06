import styled from "styled-components";
import { Grid, Paper } from "@mui/material";
import colors from "../../colors"

const handleStatusColor = value => {
  switch (value) {
    case "P": 
      return `
      background-color: ${colors.Planned} !important;
      color: ${colors.black};
    `
    case "F":
      return `
      background-color: ${colors.Finished} !important;
      color: ${colors.black};
    `
    case "A":
      return `
      background-color: ${colors.Accepted} !important;
      color: ${colors.black};
    `
    case "D":
      return `
      background.color: ${colors.Delayed} !important;
      color: ${colors.black};
    `
    case "C":
      return `
      background-color: ${colors.Cancelled} !important;
      color: ${colors.black};
    `;
    default:
      return colors.white;
  }
};

export const Item = styled(Paper)`
    ${({ value }) => handleStatusColor(value)};
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