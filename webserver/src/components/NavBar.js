import { NavBarStyle } from "./NavBar.styles";
import { Link, NavLink } from "react-router-dom";
import logo from "../Logo.png";
import rahul from "../rahul.png";

function NavBar() {
  return (
    <>
      <NavBarStyle>
        <header className="header-container">
          <div className="logo">
            <Link to="/home">
              <img className="logo" src={logo} alt="NewsPlan logo" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <h6>
                  <NavLink to="/ideabank">IDEA BANK</NavLink>
                </h6>
              </li>
              <li>
                <h6>
                  <NavLink to="/contentschedule">CONTENT SCHEDULE</NavLink>
                </h6>
              </li>
              <li>
                <h6>
                  <NavLink to="/calendar">CALENDAR</NavLink>
                </h6>
              </li>
              <li>
                <h6>
                  <NavLink to="/">KSM<img className="picture" src={rahul} alt="" /></NavLink>
                </h6>
              </li>
            </ul>
          </nav>
        </header>
      </NavBarStyle>
    </>
  );
}
export default NavBar;