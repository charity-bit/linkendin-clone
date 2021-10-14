import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
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
          src="https://ih1.redbubble.net/image.1597183677.3139/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"
        />
        <h2>Kirari Momobami</h2>
        <h4>Student Council President</h4>
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
