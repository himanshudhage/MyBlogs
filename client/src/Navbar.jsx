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
    <div style={{borderRadius:"none"}}className="navbar">
  
        <Link to="/" className="logo">
          <h3>BlogSphere</h3>
        </Link>

      <div className="navbar-links">
        <Link to="/blogs" className="navbar-link">
          Home
        </Link>
        {user.username && (
          <Link to="/create" className="navbar-link">
            Create
          </Link>
        )}
        {/* <Link to="/l" className="navbar-link">
          Blogs
        </Link> */}
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
      </div>
      <div className="navbar-auth">
        {user.username ? (
          <>
            <span className="navbar-user">Welcome, {user.username}</span>
            <button onClick={handleLogout} className="navbar-btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/register" className="navbar-link">
            Register/Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
