import styled from "styled-components";
import Button from "@mui/material/Button";
import colors from "../colors";

export const LoginButton = styled(Button)`
  && {
    color: ${colors.white};
    background-color: ${colors.P1DarkPetroleum};
    text-transform: none;

    height: 45px;
  }
  &&:hover {
    background-color: ${colors.P1DarkPetroleumHover};
  }
`;

export const CancelButton = styled(Button)`
  && {
    color: ${colors.P1DarkPetroleum};
    background-color: ${colors.white};
    border: 1px solid ${colors.P1DarkPetroleum};
    text-transform: none;
    height: 45px;
  }
  &&:hover {
    background-color: ${colors.P1GreyLightBlue};
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
    color: ${colors.white};
    background-color: ${colors.P1DarkPetroleum};
    text-transform: none;
    height: 45px;
  }
  &&:hover {
    background-color: ${colors.P1DarkPetroleumHover};
  }
`;

export const StandardButton = styled(Button)`
  && {
    color: ${colors.white};
    background-color: ${colors.P1DarkPetroleum};
    text-transform: none;
    font-weight: bold;
    display: inline;

    height: 55px;
    width: 100px;
  }
  &&:hover {
    background-color: ${colors.P1DarkPetroleumHover};
  }
`;
