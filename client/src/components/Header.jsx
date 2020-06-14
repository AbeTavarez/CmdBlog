import React from "react";

import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-container">
      <div className="left-side">
        <NavLink to="/" className="header-logo">
          <h2 className=" header-a ">CommandBlog</h2>
        </NavLink>

        <nav className="navbar-link  header-a ">
          <NavLink className="s-link" to="/articles">
            Articles
          </NavLink>
          <NavLink className="s-link" to="/categories">
            Categories
          </NavLink>
        </nav>
      </div>

      <div className="right-side header-a ">
        {props.currentUser ? (
          <div className="user-username header-a ">
            {props.currentUser.username}
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/user/login">Login::Register</Link>
          </div>
        )}

        <div>
          {props.currentUser && (
            <nav>
              <NavLink to="/profile">Profile</NavLink>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
