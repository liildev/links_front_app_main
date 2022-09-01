import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Container } from "../styles/Container";
import { Nav, Div } from "../styles/Navbar";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [active, setActive] = useState("create");

  const handleActive = (value) => {
    setActive(value);
  };

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    navigate("/");
  };

  return (
    <Div>
      <Container>
        <Nav>
          <Link to="/">Shortening Links</Link>
          <ul className="menu">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="button">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <li>
              <Link
                to="/"
                onClick={() => handleActive("create")}
                className={active === "create" ? "active" : ""}
              >
                Create
              </Link>
            </li>
            <li>
              <Link
                to="/links"
                onClick={() => handleActive("links")}
                className={active === "links" ? "active" : ""}
              >
                Links
              </Link>
            </li>
            <li>
              <a href="/" onClick={logoutHandler}>
                Sign Out
              </a>
            </li>
          </ul>
        </Nav>
      </Container>
    </Div>
  );
}
