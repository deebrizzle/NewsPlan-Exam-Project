import styled from "styled-components";
import Button from "@mui/material/Button";

export const StandardButton = styled(Button)`
  && {
    color: white;
    background-color: #415b68;
    text-transform: none;
    font-weight: bold;
    display: inline;
   
    height: 55px;
    width: 100px;
    
  }
  &&:hover {
    background-color: #5a7e90;
  }

`;
