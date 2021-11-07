import logo from "../Logo.png";
import { HomeWrapper } from "./Home.styles";
import NavBar from "../components/NavBar";
import users from "./Users";

function Home() {
  return (
    <>
    <NavBar/>
      <HomeWrapper>
            <img className="logo" src={logo} alt="Newsplan logo" />
            <p>
              <strong>Welcome to NewsPlan, {users.username}!</strong>
            </p>
            <p>
              The premium publication management software for newspapers,
              magazines and prints.
            </p>
      </HomeWrapper>
    </>
  );
}
export default Home;
