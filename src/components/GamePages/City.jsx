import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function City() {
    //state
    const [cityOne, setCityOne] = useState("");
    const [cityTwo, setCityTwo] = useState("");
    const [cityThree, setCityThree] = useState("");
    const [cityFour, setCityFour] = useState("");

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
              cityFour: cityFour,
            },
          });
        
          history.push("/hobby");
    }

    return (
        <div>
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
        <input
          type="text"
          placeholder="City Four"
          value={cityFour.inputs}
          onChange={(event) => setCityFour(event.target.value)}
        ></input>
        <button type="submit">Next</button>
      </form>

        </div>
    )
}

export default City;