import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* editImage(action) {
    try {
      console.log("ACTION.PAYLOAD in saga", action.payload);
      yield axios.put(`/api/user/${action.payload.userId}`, action.payload);
      yield put({ type: "FETCH_USER" });
    } catch (error) {
      console.log("error editing image", error);
    }
  }
  
  function* editImageSaga() {
    yield takeLatest("EDIT_IMAGE", editImage);
  }
  
  export default editImageSaga;