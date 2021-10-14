import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HeaderOption from "./HeaderOption";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
      {/* start of left  */}
      <div className="header__left">
        <img
          src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
          alt=""
        />
        {/* search bar */}
        <div className="header__search">
          {/* Search Icon */}
          <SearchIcon />

          <input type="text" />
        </div>
      </div>
      {/* end of left */}

      {/* header right */}
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="https://ih1.redbubble.net/image.1597183677.3139/st,small,507x507-pad,600x600,f8f8f8.u1.jpg" 
         title="Kirari"/>
      </div>
      {/* end of header right */}
    </div>
  );
}

export default Header;
