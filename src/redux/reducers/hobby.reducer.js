const hobbyReducer = (state = [], action) => {
    switch (action.type) {
      case "SAVE_HOBBY":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default hobbyReducer;