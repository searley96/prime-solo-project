import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, useEffect } from "react";



function ResultsPage() {

const latestGame = useSelector((store) => store.latestReducer)
console.log('This is latestGame', latestGame)

const dispatch = useDispatch();

useEffect(() => {
    dispatch({ type: "FETCH_LATEST_GAME" });
  }, []);


    return (
        <div>
        <h1>Results</h1>
        
       
        </div>
    )
}

export default ResultsPage