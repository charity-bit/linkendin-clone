import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import {selectUser} from './features/userSlice';
import { Avatar } from "@material-ui/core";

function Sidebar() {
  //pull user from the redux store
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixd=MXwxMjA3fDBMHxleHBsb3JlLZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
         src={user.photoUrl}
        >
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('redux')}
        {recentItem('Front-enddevelopment')}
        {recentItem('developer')}
        {recentItem('UI/UXdesign')}
      </div>
    </div>
  );
}
export default Sidebar;
