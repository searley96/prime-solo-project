import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import petReducer from './pet.reducer';
import vehicleReducer from './vehicle.reducer';
import cityReducer from './city.reducer';
import hobbyReducer from './hobby.reducer';
import gamesReducer from './getGames.reducer';
import latestReducer from './latestGames.reducer';
import randomReducer from './randomGame.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  petReducer,
  vehicleReducer,
  cityReducer,
  hobbyReducer,
  gamesReducer,
  latestReducer,
  randomReducer,
});

export default rootReducer;
