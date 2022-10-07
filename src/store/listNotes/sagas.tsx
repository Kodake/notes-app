import { takeEvery, call, put } from 'redux-saga/effects';
import { INIT_GET_LIST_DATA } from './actionTypes';
import axios from 'axios';
import { initFetchingGetListDataSuccess, initFetchingGetListData } from './actions';
import { NoteData, NotesListData } from '../../interfaces/notesListData';

// List Notes

export function* NotesListSaga() {
  yield takeEvery(INIT_GET_LIST_DATA, getNotesListSaga);
}

function* getNotesListSaga() {
  yield put(initFetchingGetListData());

  try {
    const resp: NotesListData = yield call(axios.get, 'https://genericdb-c3969-default-rtdb.firebaseio.com/notesList.json');

    if (resp && resp.status === 200) {
      const { data } = resp;

      const newData: NoteData[] = [];

      for (const key in data) {
        newData.push(data[key])
      }      

      yield put(initFetchingGetListDataSuccess(newData))
    }
  } catch (error) {

  }
}