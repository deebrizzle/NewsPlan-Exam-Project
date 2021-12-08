import Box from "@mui/material/Box";
import logo from "../assets/Logo.png";
import { LoginButton } from "../components/Button.styles";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  StyledFormControlLabel,
  StyledLink,
  LoginWrapper,
} from "./Login.styles";
import Parse from "parse";
import LabelledInput from "../components/LabelledInput";

//TODO This function should be refactored to remove fecthing from the database from this function
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  async function validateUser() {
    try {
      const userAuth = await Parse.User.logIn(username, password);
      setUsername("");
      setPassword("");
      setLoginError(false);
      navigate("/home");
      return true;
    } catch (error) {
      setLoginError(true);
      return false;
    }
  }

  return (
    <LoginWrapper>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <img className="logo" src={logo} alt="Newsplan logo" />
        <Box component="form" sx={{ mt: 1 }}>
          <LabelledInput
            label="Username"
            value={username}
            onChange={setUsername}
            error={loginError}
          />
          <LabelledInput
            type="password"
            label="Password"
            value={password}
            onChange={setPassword}
            error={loginError}
            helperText={loginError ? `Wrong username or password` : ""}
          />
          <StyledFormControlLabel
            control={<Checkbox value="remember" />}
            label="Remember me"
          />
          <LoginButton
            onClick={() => validateUser()}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </LoginButton>
          <Grid container>
            <Grid item xs>
              <StyledLink href="#" variant="body2" underline="none">
                Forgot password?
              </StyledLink>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </LoginWrapper>
  );
}
