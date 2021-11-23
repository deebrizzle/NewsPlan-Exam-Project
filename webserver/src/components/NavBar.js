import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { MyToolbar, NavButton } from "./NavBar.styles";
import Box from "@mui/material/Box";
import logo from "../Logo.png";
import rahul from "../rahul.png";
import { NavLink, Link } from "react-router-dom";
import Parse from "parse";
import { LogOut } from "./LogOut";

export default function NavBar() {
  const currentUser = Parse.User.current();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <MyToolbar>
          <Link to="/home">
            <img className="logo" src={logo} alt="NewsPlan logo" />
          </Link>
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
          <NavButton disableRipple component={NavLink} to="/ideabank">
            IDEA BANK
          </NavButton>
          <NavButton disableRipple component={NavLink} to="/contentschedule">
            CONTENT SCHEDULE
          </NavButton>
          <NavButton disableRipple component={NavLink} to="/calendar">
            CALENDAR
          </NavButton>
          <NavButton
            disableRipple
            component={NavLink}
            onClick={() => LogOut()}
            to="/"
          >
            {currentUser.get("username")}
            <img className="picture" src={rahul} alt="" />
          </NavButton>
        </MyToolbar>
      </AppBar>
    </Box>
  );
}
