import { takeEvery, call, put } from 'redux-saga/effects';
import { INIT_SAVE_NOTES_VALUE, NotesAction } from './actionTypes';
import axios from 'axios';
import { initSaveNotesValueSuccessfull, initSaveNotesValueFailed } from './actions';
import { NotesData } from '../../interfaces/notesData';

export function* AddNotesSaga() {
  yield takeEvery(INIT_SAVE_NOTES_VALUE, saveNotesSaga);
}

// Add Notes

function* saveNotesSaga(action: NotesAction) {

  const headerParams = {
    'content-type': 'application/json'
  }

  const createNotesData = {
    name: action.notesValue,
    id: Math.floor(Math.random() * 1000)
  }

  try {
    const resp: NotesData = yield call(axios.post,
      'https://genericdb-c3969-default-rtdb.firebaseio.com/notesList.json',
      createNotesData, { headers: headerParams });

    if (resp.status === 200) {
      yield put(initSaveNotesValueSuccessfull(true));
    }

  } catch (error) {
    yield put(initSaveNotesValueFailed(false));
  }
}