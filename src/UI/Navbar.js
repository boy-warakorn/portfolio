import React from "react";
import "./Navbar.css";
import NavbarItem from "./Navbar_item";

const Navbar = () => {
  return (
    <ul className="navbar">
      <NavbarItem title="home" isHome />
      <NavbarItem title="about" />
      <NavbarItem title="contact" />
    </ul>
  );
};

export default Navbar;
