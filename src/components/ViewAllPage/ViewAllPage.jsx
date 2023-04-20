import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ViewAllPage() {
  //grab inputs from each game page from store (rootreducer)
  //add one for game_id
  //add to dispatch
  
  const user = useSelector((store) => store.user)
  const pet = useSelector((store) => store.petReducer);
  const vehicle = useSelector((store) => store.vehicleReducer);
  const city = useSelector((store) => store.cityReducer);
  const hobby = useSelector((store) => store.hobbyReducer);

  //enable push to results page
  const history = useHistory();

  const dispatch = useDispatch();

  console.log('this is user', user)

  //dispatch data to saga
  //saga randomly selects one of each (server side logic)
  //POST_RESULTS to result saga
  const handleSubmit = () => {
    console.log("allPets", pet);
    dispatch({
      type: "POST_RESULTS",
      payload: { user: user.id, pet: pet, vehicle: vehicle, city: city, hobby: hobby }
    });
    history.push("/results");
  };


  return (
    <div>
      <h1>View All</h1>
      <h2>Pets:</h2>
      <ul>
        <li>{pet.petOne}</li>
        <li>{pet.petTwo}</li>
        <li>{pet.petThree}</li>
        <li>{pet.petFour}</li>
      </ul>
      <h2>Vehicles:</h2>
      <ul>
        <li>{vehicle.vehicleOne}</li>
        <li>{vehicle.vehicleTwo}</li>
        <li>{vehicle.vehicleThree}</li>
        <li>{vehicle.vehicleFour}</li>
      </ul>
      <h2>Cities:</h2>
      <ul>
        <li>{city.cityOne}</li>
        <li>{city.cityTwo}</li>
        <li>{city.cityThree}</li>
        <li>{city.cityFour}</li>
      </ul>
      <h2>Special Talents:</h2>
      <ul>
        <li>{hobby.hobbyOne}</li>
        <li>{hobby.hobbyTwo}</li>
        <li>{hobby.hobbyThree}</li>
        <li>{hobby.hobbyFour}</li>
      </ul>

      <button onClick={handleSubmit}>Get My Results!</button>
    </div>
  );
}

export default ViewAllPage;
