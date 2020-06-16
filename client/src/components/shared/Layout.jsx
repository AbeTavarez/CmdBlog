import React from "react";
import "./Layout.css";
const Layout = (props) => (
  <div className="layout">
    <div className="layout-children">{props.children}</div>
  </div>
);

export default Layout;
