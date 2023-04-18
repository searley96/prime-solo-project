const vehicleReducer = (state = [], action) => {
    switch (action.type) {
      case "SAVE_VEHICLE":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default vehicleReducer;