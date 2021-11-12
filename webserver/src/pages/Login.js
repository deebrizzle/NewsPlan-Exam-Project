import Box from "@mui/material/Box";
import logo from "../Logo.png";
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

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <LoginWrapper>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <img className="logo" src={logo} alt="Newsplan logo" />
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <MyTextField
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <MyTextField
            id="password"
            fullWidth
            label="Password"
            variant="outlined"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <MyFormControlLabel
            control={<Checkbox value="remember" />}
            label="Remember me"
          />

          <LoginButton
            type="submit"
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
export default Login;
