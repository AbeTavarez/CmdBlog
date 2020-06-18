import React from "react";

import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";

export default function Header(props) {
  return (
    <nav className="header-container">
      <div className="left-side">
        <NavLink to="/" className="header-logo">
          <h2 className="logo  header-a">CommandBlog</h2>
        </NavLink>

        <div className="navbar-link  header-a ">
          <NavLink className="s-link header-btn" to="/articles">
            Articles
          </NavLink>
          <NavLink className="s-link header-btn" to="/categories">
            Categories
          </NavLink>
        </div>
      </div>

      <div className="right-side header-a ">
        <div>
          {props.currentUser && (
            <nav>
              <NavLink to="/profile">
                <PersonIcon />
              </NavLink>
              <div>{props.currentUser.username}</div>
            </nav>
          )}
        </div>
        {props.currentUser ? (
          <div className="user-username header-a ">
            <button
              className="logout-btn"
              onClick={props.handleLogout}
              variant="outlined"
              color="secondary"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <NavLink to="/user/login" className="s-link header-btn">
              Login/Register
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
