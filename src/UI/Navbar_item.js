import React from "react";
import classes from "./Navbar_item.module.css";

const NavbarItem = (props) => {
  const itemClass = props.isHome ? [classes.Home] : [classes.Test];
  return (
    <li>
      <a href="/" className={itemClass.join(" ")}>
        {props.title}
      </a>
    </li>
  );
};

export default NavbarItem;
