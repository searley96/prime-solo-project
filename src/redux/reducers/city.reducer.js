const cityReducer = (state = [], action) => {
    switch (action.type) {
      case "SAVE_CITY":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default cityReducer;