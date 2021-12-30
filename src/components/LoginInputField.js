import { StyledLabelledInput } from "../pages/Login.styles";
import React from "react";

//TODO Rename to LoginInputField?
export default function LoginInputField(props) {
  return (
    <StyledLabelledInput
      margin="normal"
      fullWidth
      required
      variant="outlined"
      name={props.name}
      label={props.label}
      value={props.value}
      error={props.error}
      type={props.type}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}
