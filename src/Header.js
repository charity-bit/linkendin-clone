import React,{useState} from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HeaderOption from "./HeaderOption";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch} from "react-redux";
import { auth } from "./firebase";
import { logout} from "./features/userSlice";

function Header() {
  //fetch user from store
  const [avatar,setAvatar] = useState(true);
  const [title,setTitle]  = useState("me");
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
    setAvatar(false);
    setTitle("");
  };

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

          <input type="text" placeholder="search" />
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
        <HeaderOption click={logoutOfApp} avatar={avatar}
           title={title}
  
        />
       
      </div>
      {/* end of header right */}
    </div>
  );
}

export default Header;
