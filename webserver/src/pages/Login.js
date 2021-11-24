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
  MyTextField,
  MyFormControlLabel,
  MyLink,
  LoginWrapper,
} from "./Login.styles";
import Parse from "parse";

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
          <MyTextField
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            error={loginError}
          />
          <MyTextField
            id="password"
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            error={loginError}
            helperText={loginError ? `Wrong username or password` : ""}
          />
          <MyFormControlLabel
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
              <MyLink href="#" variant="body2" underline="none">
                Forgot password?
              </MyLink>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </LoginWrapper>
  );
}
