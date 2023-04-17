import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";


function GamePageOne() {

    const [newPet, setNewPet] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const savePetInputs = () => {
        event.preventDefault();
        dispatch({
            type: "SAVE_INPUTS",
            payload: newPet
        })
        console.log(newPet)
        history.push("/gamePageTwo")
    }

    return (
        <div>
        <h1>Pet</h1>

        <form id="inputs-one" onSubmit={savePetInputs}>
        <h3>Submit at least two answers!</h3>
        <input
        type="text"
        placeholder="Pet One"
        value={newPet.inputs}
        onChange={(event) => setNewPet(event.target.value)}
        ></input>
        <button type="submit">Next</button>
        </form>
        </div>
    )
}

export default GamePageOne;