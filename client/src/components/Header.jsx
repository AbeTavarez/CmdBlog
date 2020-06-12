import React from "react";

import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-container">
      <div className="left-side">
        <h2 to="/" className="">
          CommandBlog
        </h2>
        <br />
        <nav className="navbar-link">
          <NavLink className="s-link" to="/articles">
            Articles
          </NavLink>
          <NavLink className="s-link" to="/categories">
            Categories
          </NavLink>
        </nav>
      </div>

      {props.currentUser ? (
        <>
          {props.currentUser.username}
          <button onClick={props.handleLogout}>Logout</button>
        </>
      ) : (
        <div className="right-side">
          <Link to="/user/login">Login::Register</Link>
        </div>
      )}

      {props.currentUser && (
        <nav>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
      )}

      <hr />
    </div>
  );
}
