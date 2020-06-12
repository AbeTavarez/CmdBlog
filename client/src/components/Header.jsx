import React from "react";

import { Link, NavLink } from "react-router-dom";

export default function Header(props) {
  console.log(props.currentUser);
  return (
    <div>
      <h1>Cmd Blog Header</h1>
      <nav>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </nav>

      {props.currentUser ? (
        <>
          {props.currentUser.username}
          <button onClick={props.handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/user/login">Login</Link>
      )}

      <hr />

      {props.currentUser && (
        <nav>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
      )}
    </div>
  );
}
