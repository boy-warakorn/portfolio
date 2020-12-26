import React from "react";
import classes from "./Navbar.module.css";
import NavbarItem from "./Navbar_item";

const Navbar = () => {
  return (
    <ul className={classes.Navbar}>
      <h2 className={classes.SecondaryHeading}>
        <span className={classes.visible}>@boyy-warakorn</span>
        <span
          className={classes.invisible}
          onClick={() => {
            window.open("https://github.com/boy-warakorn");
          }}
        >
          Github
        </span>
      </h2>
      <NavbarItem link="/">Home</NavbarItem>
      <NavbarItem link="/about">About</NavbarItem>
      <NavbarItem link="/contact">Contact</NavbarItem>
    </ul>
  );
};

export default Navbar;
