import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Hobby() {

//state
const [hobbyOne, setHobbyOne] = useState("");
const [hobbyTwo, setHobbyTwo] = useState("");
const [hobbyThree, setHobbyThree] = useState("");
const [hobbyFour, setHobbyFour] = useState("");

const dispatch = useDispatch();
const history = useHistory();

const saveHobbyInputs = () => {
    event.preventDefault();
    dispatch({
      type: "SAVE_HOBBY",
      payload: {
        hobbyOne: hobbyOne,
        hobbyTwo: hobbyTwo,
        hobbyThree: hobbyThree,
        hobbyFour: hobbyFour,
      },
    });
    
    history.push("/viewAll");
  };


  return (
  <div>
    <h1>What is your Special Talent?</h1>

    <form id="hobby" onSubmit={saveHobbyInputs}>
        <h3>Submit at least two answers!</h3>
        <input
          type="text"
          placeholder="Talent One"
          value={hobbyOne.inputs}
          onChange={(event) => setHobbyOne(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Talent Two"
          value={hobbyTwo.inputs}
          onChange={(event) => setHobbyTwo(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Talent Three"
          value={hobbyThree.inputs}
          onChange={(event) => setHobbyThree(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Talent Four"
          value={hobbyFour.inputs}
          onChange={(event) => setHobbyFour(event.target.value)}
        ></input>
        <button type="submit">Next</button>
      </form>
  </div>
  );
}

export default Hobby;
