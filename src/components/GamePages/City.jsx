import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./City.css";

function City() {
  //state
  const [cityOne, setCityOne] = useState("");
  const [cityTwo, setCityTwo] = useState("");
  const [cityThree, setCityThree] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  //handler for collecting data, pushing user to next page
  //dispatch saved input
  const saveCityInputs = () => {
    event.preventDefault();
    dispatch({
      type: "SAVE_CITY",
      payload: {
        cityOne: cityOne,
        cityTwo: cityTwo,
        cityThree: cityThree,
      },
    });

    history.push("/hobby");
  };

  return (
    <div id="city-paper">
      <div id="pattern">
        <div id="content">
          <h1>Where will you live?</h1>
          <form id="city" onSubmit={saveCityInputs}>
            <h3>Submit at least two answers!</h3>
            <input
              type="text"
              placeholder="City One"
              value={cityOne.inputs}
              onChange={(event) => setCityOne(event.target.value)}
            ></input>
            <input
              type="text"
              placeholder="City Two"
              value={cityTwo.inputs}
              onChange={(event) => setCityTwo(event.target.value)}
            ></input>
            <input
              type="text"
              placeholder="City Three"
              value={cityThree.inputs}
              onChange={(event) => setCityThree(event.target.value)}
            ></input>
            <button id="next-bttn" type="submit">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default City;
