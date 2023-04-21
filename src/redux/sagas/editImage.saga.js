import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* editImage() {
try {
    console.log('action.payload', action.payload)
    yield axios.put(`/user/${editImage.id}`, editImage)

    yield put({type: 'FETCH_GAMES'})
} catch (error) {
    console.log('error editing item', error)
}
}

function* editImageSaga() {
yield takeLatest('EDIT_IMAGE', editImage)
}

// export default editImageSaga;