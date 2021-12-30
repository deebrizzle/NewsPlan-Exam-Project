import styled from "styled-components";
import { Pagination, PaginationItem } from "@mui/material";
import colors from "../../colors";

export const PaginationContainer = styled.div`
  display: "flex";
  justify-content: center;
  margin-top: 30px;
`;

export const StyledPagination = styled(Pagination)`
& .MuiPagination-ul {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
  }

& .MuiPaginationItem-root {
    color: ${colors.P1DarkPetroleum};
  }

& .MuiPaginationItem-root.Mui-selected {
    background-color: ${colors.P1GreyLightBlue};
}

`;

export const StyledPaginationItem = styled(PaginationItem)`
&. MuiPaginationItem-root {
    color: ${colors.P1DarkPetroleum};
    background-color: ${colors.P1GreyLightBlue};
    border: 1px solid ${colors.P1LightPetroleum};
  }

  &. MuiPaginationItem-root.Mui-selected {
    background-color: ${colors.P1GreyLightBlue};
  }
`;
