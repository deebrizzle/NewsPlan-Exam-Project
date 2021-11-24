import styled from "styled-components";
import { Tab, Tabs } from "@mui/material";

export const MyTabs = styled(Tabs)`
&. MuiTabs-root {
    color: #415b68;
    textColor: #415b68;
}

& .MuiTabs-indicator {
    background-color: #415b68;
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