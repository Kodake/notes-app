import {takeEvery} from 'redux-saga/effects';
import { GET_NOTES_VALUE } from './actionTypes';



export default function* AddNotesSaga() {
  yield takeEvery(GET_NOTES_VALUE, getNotesSaga);
}

function* getNotesSaga() {
  console.log('getting notes saga here');
}