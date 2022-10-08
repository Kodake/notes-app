import { all, fork } from 'redux-saga/effects';
import { AddNotesSaga } from '../store/addNotes/sagas';
import { DeleteNotesSaga } from '../store/deleteNotes/sagas';
import { NotesListSaga } from '../store/listNotes/sagas';

export default function* rootSaga() {
    yield all([fork(AddNotesSaga), fork(DeleteNotesSaga), fork(NotesListSaga)]);
}