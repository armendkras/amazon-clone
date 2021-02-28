import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideMenu.css";
function SideMenu() {
  return (
    <div className="SideMenu">
      <NavLink activeClassName="activeAdm" to="/Admin/Home">
        <div className="MenuButtons">
          <h4>All Products</h4>
        </div>
      </NavLink>
      <NavLink activeClassName="activeAdm" to="/Admin/AddProduct">
        <div activeClassName="activeAdm" className="MenuButtons">
          <h4>Add Products</h4>
        </div>
      </NavLink>
    </div>
  );
}

export default SideMenu;
