import React from "react";
import "./HeaderStyles/header_style.scss";
import User from "./HeaderComponents/User";
import Search from "./HeaderComponents/Search";
import NotificationBox from "./HeaderComponents/NotificationBell";

const Header = () => {
  return (
    <div className="header">
      <Search />
      <div className="rightIcons">
        <NotificationBox />
        <User />
      </div>
    </div>
  );
};

export default Header;
