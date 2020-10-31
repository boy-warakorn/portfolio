import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar_item.module.css";

const NavbarItem = (props) => {
  const itemClass = props.isHome ? [classes.Home] : [classes.Test];
  return (
    <li>
      {props.isMain ? (
        <b className={itemClass.join(" ")}>{props.title}</b>
      ) : (
        <NavLink
          exact
          to={props.link}
          className={itemClass.join(" ")}
          activeClassName={classes.Active}
        >
          {props.title}
        </NavLink>
      )}
    </li>
  );
};

export default NavbarItem;
