import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";

export const MyDataGrid = styled(DataGrid)`
.MuiDataGrid-row:nth-child(even){
    background-color: #DCE5E9;;
  }

  .MuiDataGrid-row:nth-child(odd){
    background-color: #FFFFFF;
  }

  .css-99lfi7-MuiDataGrid-columnsContainer{
  background-color: #DCE5E9;
  }

  .MuiDataGrid-footerContainer {
    background-color: #FFFFFF;
  }

  .css-1jbbcbn-MuiDataGrid-columnHeaderTitle{
    font-weight: 700;
  }
  
`;
