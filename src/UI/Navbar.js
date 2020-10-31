import React from "react";
import classes from "./Navbar.module.css";
import NavbarItem from "./Navbar_item";

const Navbar = () => {
  return (
    <ul className={classes.Navbar}>
      <NavbarItem title="boy-warakorn" isHome isMain />
      <NavbarItem title="Home" link="/" />
      <NavbarItem title="About" link="/about" />
      <NavbarItem title="Contact" link="/contact" />
    </ul>
  );
};

export default Navbar;
