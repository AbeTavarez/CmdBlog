import React from "react";
import "./Layout.css";
const Layout = (props) => (
  <div className="layout">
    <Nav />
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
