import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import './UserPage.css'

//🔴TO-DO: default profile image displayed, ability to edit profile image
//🔴TO-DO: GRID VIEW BY GAME -- Can delete each game

//this page is where previous saved games will be listed
//delete and view buttons next to each saved game

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  //gets games from store
  const games = useSelector((store) => store.gamesReducer);

  console.log("saved games", games);

  const history = useHistory();

  const dispatch = useDispatch();

  //FOR MODAL
  // const [deleteItemId, setDeleteItemId] = useState(null);

  //gets past games from database on load
  useEffect(() => {
    dispatch({ type: "FETCH_GAMES" });
  }, []);

  //will take user to first game play page when new game button clicked
  const toNewGame = () => {
    history.push("/pet");
  };

  const handleDelete = (id) => {
    console.log("id", id);
    dispatch({
      type: "DELETE_GAME",
      payload: id,
    });
  };

  //🔴TO-DO: default profile image displayed, ability to edit profile image
  function handleEditClick() {
    console.log("in handleEditClick");
    // dispatch({type: 'SET_EDIT_IMAGE', payload: })
    history.push("/edit");
  }

  return (
    <div id="user-paper">
  <div id="pattern">
    <div id="content">
    <div className="container">
    <h1 id='user-header'>Welcome, {user.username}!</h1>
      <img src={user.image_url} />
  
      <br></br>
      <button id='edit-bttn' onClick={handleEditClick}>Edit Image</button>
     <br></br>
      {/* <p>Your ID is: {user.id}</p> */}
     <h2 id='past-games'>Your Games</h2>
      {games &&
        games.map((game) => (
          <div id='games' className="grid-item" key={game.id}>
          <p>
            Abode: {game.MASH}<br/>
            Pet: {game.pets}<br />
            Vehicle: {game.vehicle}<br />
            City: {game.city}<br />
            Hobby: {game.hobby}<br />
          </p>
          <button id='delete-bttn' onClick={() => handleDelete(game.id)}>Delete</button>
        </div>
        ))}
<br></br>
      <LogOutButton className="btn" />

      <button id='new-bttn' onClick={toNewGame}>New Game</button>
    </div>
    </div>
    </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
