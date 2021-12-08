import styled from "styled-components";
import { Tab, Tabs } from "@mui/material";
import colors from "./colors";

export const MyTabs = styled(Tabs)`
  &. MuiTabs-root {
    color: ${colors.P1DarkPetroleum};
    border: 1px solid ${colors.P1LightPetroleum};
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 50px;
  }

  & .MuiTabs-indicator {
    display: none;
  }

  & .MuiTab-root {
    color: ${colors.P1DarkPetroleum};
  }

  & .MuiTab-root.Mui-selected {
    color: ${colors.P1DarkPetroleum};
    border: 1px solid ${colors.P1LightPetroleum};
    box-sizing: border-box;
    border-radius: 8px;
    background-color: ${colors.P1GreyLightBlue};
  }
`;

export const MyTab = styled(Tab)`
  & .MuiTab-root {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
  }
`;
