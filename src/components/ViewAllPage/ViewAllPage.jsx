import { useDispatch, useSelector } from "react-redux";

function ViewAllPage() {

    //grab inputs from each game page from store (rootreducer)
    const pet = useSelector((store) => store.petReducer);
    const vehicle = useSelector((store) => store.vehicleReducer);
    const city = useSelector((store) => store.cityReducer);
    const hobby = useSelector((store) => store.hobbyReducer);
 
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


        <button>Get My Results!</button>
    </div>
 )
}

export default ViewAllPage;