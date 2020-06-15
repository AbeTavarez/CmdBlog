import React from "react";

import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";

export default function Header(props) {
  return (
    <nav className="header-container">
      <div className="left-side">
        <NavLink to="/" className="header-logo">
          <h2 className="logo  header-a">CommandBlog</h2>
        </NavLink>

        <nav className="navbar-link  header-a ">
          <NavLink className="s-link" to="/articles">
            <Button style={{ color: "white" }}>Articles</Button>
          </NavLink>
          <NavLink className="s-link" to="/categories">
            <Button style={{ color: "white" }}>Categories</Button>
          </NavLink>
        </nav>
      </div>

      <div className="right-side header-a ">
        {props.currentUser ? (
          <div className="user-username header-a ">
            {props.currentUser.username}

            <Button
              onClick={props.handleLogout}
              variant="outlined"
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Link to="/user/login">
              <Button variant="outlined" color="secondary">
                Login/Register
              </Button>
            </Link>
          </div>
        )}

        <div>
          {props.currentUser && (
            <nav>
              <NavLink to="/profile">
                <PersonIcon />
              </NavLink>
            </nav>
          )}
        </div>
      </div>
    </nav>
  );
}
