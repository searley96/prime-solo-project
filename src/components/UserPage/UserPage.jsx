import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

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

  return (
    <div className="container">
      <img src={user.image_url} width='200'/>
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}

      {games &&
        games.map((game) => (
          <div key={game.id}>
            <br></br>
            Pet: {game.pets} Vehicle: {game.vehicle} City: {game.city} Hobby:{" "}
            {game.hobby}
            <button onClick={() => handleDelete(game.id)}>Delete</button>
          </div>
        ))}

      <button onClick={toNewGame}>New Game</button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
