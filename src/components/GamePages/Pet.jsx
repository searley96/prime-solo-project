import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import './Pet.css'

//TO-DO: add back button

function Pet() {
//state
  const [petOne, setPetOne] = useState("");
  const [petTwo, setPetTwo] = useState("");
  const [petThree, setPetThree] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  //handler for collecting data, pushing to /gamePageTwo
  //dispatch saved input
  //different payload for each input?

  const savePetInputs = () => {
    event.preventDefault();
    dispatch({
      type: "SAVE_PET",
      payload: {
        petOne: petOne,
        petTwo: petTwo,
        petThree: petThree,
      },
    });
    console.log(petOne);
    history.push("/vehicle");
  };

  return (
    <div id="pet-paper">
      <div id="pet-pattern">
    <div id="pet-content">
      <h1>What Pet Will You Own?</h1>

      <form id="pet" onSubmit={savePetInputs}>
        <h3>Submit three possibilities!</h3>
        <input
          type="text"
          placeholder="Pet One"
          value={petOne.inputs}
          onChange={(event) => setPetOne(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Pet Two"
          value={petTwo.inputs}
          onChange={(event) => setPetTwo(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Pet Three"
          value={petThree.inputs}
          onChange={(event) => setPetThree(event.target.value)}
        ></input>
        <br></br>
        <button id='next-bttn' type="submit">Next</button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Pet;
