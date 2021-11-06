import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import FormControlLabel from "@mui/material/FormControlLabel";

export const LoginWrapper = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .logo {
  width: 90%;
  margin: 0%, 0%;
}
`;

export const MyTextField = styled(TextField)`
  width: 100%;
  & .MuiOutlinedInput-notchedOutline {
    border-color: #415b68;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #3296bd;
  }

  & label.Mui-focused {
    color: #3296bd;
  }
`;

export const MyFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    color: #415b68;
  }

  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate {
    color: #415b68;
  }
`;

export const MyLink = styled(Link)`
  &.MuiLink-underlineNone {
    color: #415b68;
  }

  &:hover {
    color: black;
  }
`;
