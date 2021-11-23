import logo from "../Logo.png";
import { HomeWrapper } from "./Home.styles";
import NavBar from "../components/NavBar";
import Parse from "parse";

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
      </HomeWrapper>
    </>
  );
}
