import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import colors from "../colors";

export const MyDataGrid = styled(DataGrid)`
.MuiDataGrid-row:nth-child(even){
    background-color: ${colors.P1GreyLightBlue};
  }

  .MuiDataGrid-row:nth-child(odd){
    background-color: ${colors.white};
  }

  .css-99lfi7-MuiDataGrid-columnsContainer{
  background-color: ${colors.P1GreyLightBlue};
  }

  .MuiDataGrid-footerContainer {
    background-color: ${colors.white};
  }

  .css-1jbbcbn-MuiDataGrid-columnHeaderTitle{
    font-weight: 700;
  }
  
`;
