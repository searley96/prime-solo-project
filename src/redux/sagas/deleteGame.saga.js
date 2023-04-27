import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* deleteGame(action) {
try {
    console.log('action.payload', action.payload)
    yield axios.delete(`api/games/delete/${action.payload}`)

    yield put({type: 'FETCH_GAMES'})
} catch (error) {
    console.log('error deleting item', error)
}
}

// function* deleteRandomGame(action) {
//     try {
//         console.log('action.payload', action.payload)
//         yield axios.delete(`api/games/delete/${action.payload}`)
    
//         yield put({type: 'FETCH_RANDOM_GAMES'})
//     } catch (error) {
//         console.log('error deleting item', error)
// }
// }

function* deleteGameSaga() {
yield takeLatest('DELETE_GAME', deleteGame)
// yield takeLatest('DELETE_RANDOM_GAME', deleteRandomGame)
}


export default deleteGameSaga;