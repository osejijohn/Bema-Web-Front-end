import React from "react";
import "./HeaderStyles/mobile_header.scss";
import { BsMenuButtonWide } from "react-icons/bs";

const MobileHeader = () => {
  const handleMenuClick = () => {
    const navv = document.getElementsByClassName("navv")[0];
    navv.classList.toggle("open");
  };

  return (
    <div className="mobileHeader">
      <div className="HeaderLogo">
        <h1>BEMA</h1>
      </div>

      <div className="menu" onClick={handleMenuClick}>
        <BsMenuButtonWide />
      </div>
    </div>
  );
};

export default MobileHeader;
