import React from "react";
import logo from "../Images/contents/logo-8opal.png";
import { GrClose } from "react-icons/gr";

interface SideDrawerProps {
  show: boolean;
  closeDrawer: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ show, closeDrawer }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
         <div className="drawer-header">
        <button className="close-button" onClick={closeDrawer}>
          <GrClose color="rgba(243, 194, 60, 1)" size={"2em"} />
        </button>
      </div>
        <img src={logo}/>
      <ul>
        <li><a href="#first" onClick={closeDrawer}>ГЛАВНАЯ</a></li>
        <li><a href="#second" onClick={closeDrawer}>О НАС</a></li>
        <li><a href="#third" onClick={closeDrawer}>КАТАЛОГ</a></li>
        <li><a href="#first" onClick={closeDrawer}>КОНТАКТЫ</a></li>
      </ul>
    </nav>
  );
};

export default SideDrawer;