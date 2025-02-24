import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "./App";
import axios from "axios";

function Navbar() {
  const user = useContext(userContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/logout")
      .then((res) => {
        if (res.data === "Success") navigate(0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h3>Blog App</h3>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        {user.username && (
          <Link to="/create" className="navbar-link">
            Create
          </Link>
        )}
        <a href="#" className="navbar-link">
          Contact
        </a>
      </div>
      <div className="navbar-auth">
        {user.username ? (
          <button onClick={handleLogout} className="navbar-btn">
            Logout
          </button>
        ) : (
          <h5>
            <Link to="/register" className="navbar-link navbar-login">
              Register/Login
            </Link>
          </h5>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
