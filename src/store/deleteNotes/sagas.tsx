import { takeEvery, call, put } from 'redux-saga/effects';
import { DeleteNotesAction, INIT_DELETE_NOTES } from './actionTypes';
import axios from 'axios';
import { initDeleteNotesFailed, initDeleteNotesSuccessfull } from './actions';
import { NotesDeleteData } from '../../interfaces/notesDeleteData';

export function* DeleteNotesSaga() {
  yield takeEvery(INIT_DELETE_NOTES, removeNotesSaga);
}

// Add Notes

function* removeNotesSaga(action: DeleteNotesAction) {
  const headerParams = {
    'content-type': 'application/json'
  }

  try {
    const resp: NotesDeleteData = yield call(axios.delete,
      `https://genericdb-c3969-default-rtdb.firebaseio.com/notesList/${action.id}.json`, { headers: headerParams });

    if (resp && resp.status === 200) {
      yield put(initDeleteNotesSuccessfull(true));
    }

  } catch (error) {
    yield put(initDeleteNotesFailed(false));
  }
}