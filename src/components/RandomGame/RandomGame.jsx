import React from "react";
import "./RandomGame.css";
import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './RandomGame.css'

function RandomGame() {

    const randomGame = useSelector((store) => store.randomReducer);

    const dispatch = useDispatch();

    const history = useHistory();

    console.log('this is randomGame', randomGame)

  useEffect(() => {
    dispatch({ type: "FETCH_RANDOM_GAME" });
  }, []);

  //dispatch data to saga
  //POST_RESULTS to randomResults saga
  const handleSubmit = () => {

    dispatch({
      type: "POST_RANDOM_RESULTS",
      payload: { randomGame: randomGame }
    });
    history.push("/user");
  };


return (
    <div id="random-paper">
      <div id="random-pattern">
        <div id="random-content">
          <div className="container">
            <h1>Random Game</h1>
            <h2>Results</h2>
            {randomGame &&
        randomGame.map((game) => (
          <div key={game.id}>
            <br></br>
            <h2>Abode:</h2> 
            <h3>{game.MASH}</h3>
            <br></br>
            <h2>Pet:</h2>
            <h3>{game.pets}</h3>
            <br></br>
            <h2>Vehicle:</h2>
            <h3>{game.vehicle} </h3>
            <br></br>
            <h2>City:</h2>
            <h3>{game.city} </h3>
            <br></br>
            <h2>Hobby:</h2>
            <h3>{game.hobby}</h3>
          </div>
        ))}
        <button id='home-bttn' onClick={handleSubmit}>Home</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomGame;
