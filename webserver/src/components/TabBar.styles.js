import styled from "styled-components";
import { Tab, Tabs } from "@mui/material";

export const MyTabs = styled(Tabs)`
  &. MuiTabs-root {
    background-color: #415b68;
    color: #415b68;
    border: 1px solid #94afbc;
    box-sizing: border-box;
    border-radius: 8px;
  }

  & .MuiTabs-indicator {
    display: none;
  }

  & .MuiTab-root {
    color: #415b68;
  }

  & .MuiTab-root.Mui-selected {
    color: #415b68;
    border: 1px solid #94afbc;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #dce5e9;
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

  & .MuiTab-textColorPrimary {
    color: #415b68;
  }
`;
