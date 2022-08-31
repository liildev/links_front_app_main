import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Nav } from "../styles/Navbar";

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
    <Nav>
      <Link to="/">Shortening Links</Link>

      <ul>
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
  );
}
