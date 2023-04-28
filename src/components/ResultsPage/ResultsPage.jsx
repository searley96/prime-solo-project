import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, useEffect } from "react";
import { useHistory } from "react-router-dom";
import './ResultsPage.css'

function ResultsPage() {
  const latestGame = useSelector((store) => store.latestReducer);
  
  console.log("This is latestGame", latestGame);

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_LATEST_GAME" });
  }, []);

const handleUser = () => {
    event.preventDefault();
    history.push("/user");
}

  return (
    <div id="results-paper">
    <div id="results-pattern">
      <div id="results-content">
      <h1 id='results-header'>Your Fourtune:</h1>
      {latestGame &&
        latestGame.map((game) => (
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
        <button id='next-bttn' onClick={handleUser}>Home</button>
    </div>
    </div>
    </div>
  );
}

export default ResultsPage;
