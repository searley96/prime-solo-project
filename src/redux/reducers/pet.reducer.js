const petReducer = (state = [], action) => {
    switch (action.type) {
      case "SAVE_PET":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default petReducer;