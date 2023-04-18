import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Vehicle() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [vehicleOne, setVehicleOne] = useState("");
  const [vehicleTwo, setVehicleTwo] = useState("");
  const [vehicleThree, setVehicleThree] = useState("");
  const [vehicleFour, setVehicleFour] = useState("");

  const saveVehicleInputs = () => {
    event.preventDefault();
    dispatch({
        type: "SAVE_VEHICLE",
        payload: {
          vehicleOne: vehicleOne,
          vehicleTwo: vehicleTwo,
          vehicleThree: vehicleThree,
          vehicleFour: vehicleFour,
        },
      });
     
      history.push("/city");
  }

  return (
    <div>
      <h1>Vehicle</h1>
      <form id="vehicle" onSubmit={saveVehicleInputs}>
        <h3>Submit at least two answers!</h3>
        <input
          type="text"
          placeholder="Vehicle One"
          value={vehicleOne.inputs}
          onChange={(event) => setVehicleOne(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Vehicle Two"
          value={vehicleTwo.inputs}
          onChange={(event) => setVehicleTwo(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Vehicle Three"
          value={vehicleThree.inputs}
          onChange={(event) => setVehicleThree(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Vehicle Four"
          value={vehicleFour.inputs}
          onChange={(event) => setVehicleFour(event.target.value)}
        ></input>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Vehicle;
