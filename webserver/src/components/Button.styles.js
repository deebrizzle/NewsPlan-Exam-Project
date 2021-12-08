import styled from "styled-components";
import Button from "@mui/material/Button";

export const LoginButton = styled(Button)`
  && {
    color: white;
    background-color: #415b68;
    text-transform: none;

    height: 45px;
  }
  &&:hover {
    background-color: #5a7e90;
  }
`;

export const CancelButton = styled(Button)`
  && {
    color: #415b68;
    background-color: #00000;
    border: 1px solid #6F93A5;
    text-transform: none;
    height: 45px;
  }
  &&:hover {
    background-color: #DCE5E9;
  }
`;

export const DeleteButton = styled(Button)`
  && {
    color: #DB4646;
    background-color: #00000;
    border: 1px solid #752626;
    text-transform: none;
    height: 45px;
  }
  &&:hover {
    background-color: #f6d5d5;
  }
`;



export const SaveButton = styled(Button)`
  && {
    color: white;
    background-color: #415b68;
    text-transform: none;
    height: 45px;
  }
  &&:hover {
    background-color: #5a7e90;
  }
`;

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



