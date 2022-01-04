import logo from "../assets/Logo.png";
import { HomeWrapper } from "./Home.styles";
import NavBar from "../components/Navigation/NavBar";
import Parse from "parse";
import React from "react";
import DialogComments from "../components/DialogComments";

export default function Home() {
const currentUser = Parse.User.current();
  return (
    <>
      <NavBar />
      <HomeWrapper>
        <img className="logo" src={logo} alt="Newsplan logo" />
        <p>
          <strong>Welcome to NewsPlan, {currentUser.get("first_name")}</strong>
        </p>
        <p>
          The premium publication management software for newspapers, magazines
          and prints.
        </p>
        <DialogComments/>
      </HomeWrapper>
    </>
  );
}
