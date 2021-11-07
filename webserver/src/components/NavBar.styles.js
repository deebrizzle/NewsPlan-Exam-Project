import styled from "styled-components";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

export const MyToolbar = styled(Toolbar)`
  && {
    background-color: white;
    padding: 1em 0 1em 0 ;

    @media screen and (max-width: 800px) {
          flex-direction: column;
          border-bottom: 3px solid #f2f2f2;
          padding: 0 0 15em 0;
          text-align:left;
          padding: 2em 0 2em 0 ;
    }
  }
  
  & .MuiButton-root {
    color: #415b68;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin: 0 3em 0 0;

    @media screen and (max-width: 800px) {
        margin: 0 0 0 0;  
    }
  }

  .logo {
    margin-left: 2em;
    align-self: center;
    width: 200px;
  }

  .picture{
    width:40px;
    vertical-align:middle;
    margin:0px 0px 0px 20px;
  }
`;

export const NavButton = styled(Button)`
  &&:hover {
    background-color: white;
    color: #5a7e90;
  }
`;
