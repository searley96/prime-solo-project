import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

//NOT DONE!!!!

function* addResult(action) {
  try {
    console.log("inside of addResults generator function", action);

    yield axios.post("/api/games/", action.payload);

    yield put({ type: "FETCH_RESULTS", payload: action.payload });
  } catch (error) {
    console.log("error with adding a new game", error);
  }
}

function* addRandomResult(action) {
  try {
    console.log("inside of addRandomResults generator function", action);

    yield axios.post("/api/games/", action.payload);

    yield put({ type: "FETCH_RANDOM_RESULTS", payload: action.payload });
  } catch (error) {
    console.log("error with adding a random game", error);
  }
}

function* addResultSaga() {
  yield takeLatest("POST_RESULTS", addResult);
  yield takeLatest('POST_RANDOM_RESULTS', addRandomResult);
}

export default addResultSaga;
