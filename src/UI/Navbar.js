import React from "react";
import classes from "./Navbar.module.css";
import NavbarItem from "./Navbar_item";

const Navbar = () => {
  return (
    <ul className={classes.Navbar}>
      <NavbarItem title="Home" isHome />
      <NavbarItem title="About" />
      <NavbarItem title="Contact" />
    </ul>
  );
};

export default Navbar;
