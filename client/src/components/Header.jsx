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
          <NavLink className="s-link" to="/articles">
            <button className="header-btn">Articles</button>
          </NavLink>
          <NavLink className="s-link" to="/categories">
            <button className="header-btn">Categories</button>
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
              classname="logout-btn"
              onClick={props.handleLogout}
              variant="outlined"
              color="secondary"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/user/login">
              <button variant="outlined" color="secondary">
                Login/Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
