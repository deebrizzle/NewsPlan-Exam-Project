import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { MyToolbar, NavButton } from "./NavBar.styles";
import Box from "@mui/material/Box";
import logo from "../../assets/Logo.png";
import rahul from "../../assets/rahul.png";
import { NavLink, Link } from "react-router-dom";
import Parse from "parse";
import NotificationDrawer from "../NotificationDrawer";
import {FieldContext} from "../FieldContext"

export default function NavBar() {
  const currentUser = Parse.User.current();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const {resetContext} = useContext(FieldContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <MyToolbar>
          <Link to="/home">
            <img className="logo" src={logo} alt="NewsPlan logo" />
          </Link>
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
          <NavButton disableRipple component={NavLink} to="/ideabank" onClick={resetContext}>
            IDEA BANK
          </NavButton>
          <NavButton disableRipple component={NavLink} to="/employees" onClick={resetContext}>
            EMPLOYEES
          </NavButton>
          <NavButton disableRipple component={NavLink} to="/articles" onClick={resetContext}>
            ARTICLES
          </NavButton>
          <NavButton disableRipple component={NavLink} to="/workload">
            WORKLOAD
          </NavButton>
          <NavButton disableRipple onClick={() => setDrawerOpen(true)}>
            {currentUser.get("username")}
            <img className="picture" src={rahul} alt="" />
          </NavButton>
          <NotificationDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        </MyToolbar>
      </AppBar>
    </Box>
  );
}
