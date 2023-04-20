const latestReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_LATEST_GAMES":
          return action.payload;
        default:
          return state;
      }
};
export default latestReducer;