import React from "react";
import InputOption from "./InputOption";
import "./Feed.css";
import {
  CalendarViewDay,
  Subscriptions,
  EventNote,
  Image,
  Create,
} from "@material-ui/icons";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="submit">send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          {/* input options */}
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A333E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="write article"
            color="#7fc15e"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
