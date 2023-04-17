import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";

//default profile image displayed, ability to edit profile image
//this page is where previous saved games will be listed
//delete and view buttons next to each saved game
//log out button
//new game button



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const history = useHistory();

  const toNewGame = () => {
    history.push("/gamePageOne")
  }
  
  return (
    <div className="container">
      
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      {/* <img src={user.image_url} /> */}
      <button onClick={toNewGame}>New Game</button>
      <LogOutButton className="btn" />
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
