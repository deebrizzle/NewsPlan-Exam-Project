import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { MyToolbar, NavButton } from "./NavBar.styles";
import Box from "@mui/material/Box";
import logo from "../../assets/Logo.png";
import rahul from "../../assets/rahul.png";
import { NavLink, Link } from "react-router-dom";
import Parse from "parse";
import UserDrawer from "../UserDrawer";
import {ModalContext} from "../../components/ModalContext";

export default function NavBar() {
  const currentUser = Parse.User.current();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const {setDate} = useContext(ModalContext);
  const dateObj = new Date();
  const currDate = `${dateObj.getMonth()+1}, ${dateObj.getDate()}, ${dateObj.getFullYear()} 00:00:00`;
  const resetDate = () => {
    setDate(currDate)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <MyToolbar>
          <Link to="/home">
            <img className="logo" src={logo} alt="NewsPlan logo" />
          </Link>
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
          <NavButton disableRipple component={NavLink} to="/ideabank" onClick={resetDate}>
            IDEA BANK
          </NavButton>
          <NavButton disableRipple component={NavLink} to="/contentschedule" onClick={resetDate}>
            CONTENT SCHEDULE
          </NavButton>
          <NavButton disableRipple component={NavLink} to="/calendar">
            CALENDAR
          </NavButton>
          <NavButton disableRipple onClick={() => setDrawerOpen(true)}>
            {currentUser.get("username")}
            <img className="picture" src={rahul} alt="" />
          </NavButton>
          <UserDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        </MyToolbar>
      </AppBar>
    </Box>
  );
}
