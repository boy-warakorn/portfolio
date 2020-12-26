import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar_item.module.css";

const NavbarItem = (props) => {
  return (
    <li className={classes.NavItemBox}>
      <NavLink
        exact
        to={props.link}
        className={classes.NavItem}
        activeClassName={classes.NavItemActive}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
