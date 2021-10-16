import React, { useState, useEffect } from "react";
import InputOption from "./InputOption";
import Post from "./Post";
import "./Feed.css";
import {
  CalendarViewDay,
  Subscriptions,
  EventNote,
  Image,
  Create,
} from "@material-ui/icons";
import { db } from "./firebase";
import firebase from "firebase/compat";
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //basically get posts and re-renders Feed component everytime something changes
    //  onSnapshot => real time listener collection
    //give us a snapshot everytime a post changes,gets added,deleted e.t.c
    db.collection("posts").orderBy("timeStamp","desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) =>
          //implicit return
          ({
            id: doc.id,
            data: doc.data(),
          })
        )
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault(); //to prevent reloading of the page
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl:user.photoUrl || "",

      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      {/* search */}
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
              placeholder="Start a post"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
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
      {/* end of search */}
      {/* posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        // keys help in re-rendering
        //instead of re-renderng the intire list react will render the added one only
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })}
    </div>
  );
}

export default Feed;
