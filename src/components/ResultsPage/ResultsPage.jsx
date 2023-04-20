import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, useEffect } from "react";

function ResultsPage() {
  const latestGame = useSelector((store) => store.latestReducer);
  console.log("This is latestGame", latestGame);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_LATEST_GAME" });
  }, []);

  return (
    <div>
      <h1>Results</h1>
      {latestGame &&
        latestGame.map((game) => (
          <div key={game.id}>
            <br></br>
            Pet:
            {game.pets}
            <br></br>
            Vehicle:
            {game.vehicle} 
            <br></br>
            City: 
            {game.city} 
            <br></br>
            Hobby: 
            {game.hobby}
          </div>
        ))}
    </div>
  );
}

export default ResultsPage;
