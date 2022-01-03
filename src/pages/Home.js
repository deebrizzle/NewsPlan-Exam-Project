import logo from "../assets/Logo.png";
import { HomeWrapper } from "./Home.styles";
import NavBar from "../components/Navigation/NavBar";
import Parse from "parse";
import {getCommentsFromArticle} from "../database/Comments"
import React, { useEffect, useState } from "react";

export default function Home() {
  // if we want to show, that our GET request of comments works
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommentsFromArticle("6VumG4ABKn").then((comments) => {
      setComments(comments);
    });
  }, []);
  console.log(comments)

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
      </HomeWrapper>
    </>
  );
}
