import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Hobby.css";

function Hobby() {
  //state
  const [hobbyOne, setHobbyOne] = useState("");
  const [hobbyTwo, setHobbyTwo] = useState("");
  const [hobbyThree, setHobbyThree] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const saveHobbyInputs = () => {
    if (!hobbyOne || !hobbyTwo || !hobbyThree) {
      setError("Please enter three hobbies.");
      return;
    }
    event.preventDefault();
    dispatch({
      type: "SAVE_HOBBY",
      payload: {
        hobbyOne: hobbyOne,
        hobbyTwo: hobbyTwo,
        hobbyThree: hobbyThree,
      },
    });

    history.push("/viewAll");
  };

  return (
    <div id="hobby-paper">
      <div id="hobby-pattern">
        <div id="hobby-content">
          <h1>What is your Special Talent?</h1>

          <form id="hobby" onSubmit={saveHobbyInputs}>
            <h3>Submit three possibilities!</h3>
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
            {error && <p className="error">{error}</p>}
            <button id="next-bttn" type="submit">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hobby;
