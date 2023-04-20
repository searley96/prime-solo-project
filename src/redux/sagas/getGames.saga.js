import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

//saga get
function* getGames() {
  try {
    const gameList = yield axios.get("/api/games");
    console.log("gameList", gameList);

    yield put({ type: "SET_GAMES", payload: gameList.data });
  } catch (error) {
    console.log("get request failed", error);
  }
}

//saga to get latest game 
function* getLatestGame() {
  try {
    const latestGame = yield axios.get("/api/games/latest");
    console.log("latestGame", latestGame);

    yield put({ type: "SET_LATEST_GAMES", payload: latestGame.data });
  } catch (error) {
    console.log("error getting latest game", error);
  }
}

//for root saga
function* getGamesSaga() {
  yield takeLatest("FETCH_GAMES", getGames),
    yield takeLatest("FETCH_LATEST_GAME", getLatestGame);
}

export default getGamesSaga;
