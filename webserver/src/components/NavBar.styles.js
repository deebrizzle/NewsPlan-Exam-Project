import styled from "styled-components";

export const NavBarStyle = styled.aside`
  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .logo {
    margin-left: 2em;
    align-self: center;
    width: 200px;
  }

  nav {
    align-self: center;
  }

  .picture{
      width:40px;
      vertical-align:middle;
      margin:0px 0px 0px 20px;
  }

  header ul li {
    display: inline-block;
    padding: 0 5em 0 0;
  }
  
  header ul li a {
    text-decoration: none;
    color: #415b68;
  }

  li a.active {
    color: #19191D;
  }

  li a:hover {
    color: #19191D;
  }

  @media screen and (max-width: 1140px) {
    .header-container {
      flex-direction: column;
      border-bottom: 3px solid #f2f2f2;
      padding: 2.3em 0;
    }
  }
  }
`;
