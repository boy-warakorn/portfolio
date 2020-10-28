import React from "react";
import "./Navbar_item.css";

const NavbarItem = (props) => {
  let name = "";
  if (props.isHome) {
    name = "home";
  }
  return (
    <li>
      <a href="/" className={name}>
        {props.title}
      </a>
    </li>
  );
};

export default NavbarItem;
