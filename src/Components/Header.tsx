import React, { useState } from "react";
import logo from "../Images/contents/logo-8opal.png";
// import { TbWorld, TbMenu2, TbX } from "react-icons/tb";
// import logo_img from "../Images/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import SideDrawer from "./SideDrawer";

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  function scrollFooter() {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  }
  let active = "rgba(243, 194, 60, 1)";
  return (
    <div className="header">
      <img src={logo} className="logo m" />
      {window.innerWidth > 700 ? (
        <div className="menu">
          <a href="#first">ГЛАВНАЯ</a>
          <a href="#second">О НАС</a>
          <a href="#third">КАТАЛОГ</a>
          <a href="#third">КОНТАКТЫ</a>
        </div>
      ) : null}
      <div className="tel">
        <a className="white">+7 701 267 7727 </a>
      </div>
      {window.innerWidth < 700 ? (
        <GiHamburgerMenu
          color="rgba(243, 194, 60, 1)"
          size={"44px"}
          className="menu"
          onClick={toggleDrawer}
        />
      ) : null}
      <SideDrawer show={drawerOpen} closeDrawer={toggleDrawer} />
    </div>
  );
};

export default Header;
