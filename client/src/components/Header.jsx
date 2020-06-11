import React from "react";

import { Link, NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <h1>Cmd Blog</h1>
      {props.currentUser ? (
        <>
          {props.currentUser.username}
          <button onClick={props.handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/user/login">Login/Register</Link>
      )}
      <hr />
      {props.currentUser && (
        <nav>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/categories">Categories</NavLink>
        </nav>
      )}
    </div>
  );
}
