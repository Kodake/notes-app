import { all, fork } from 'redux-saga/effects';
import AddNotesSaga from '../store/sagas';

export default function* rootSaga() {
    yield all([fork(AddNotesSaga)]);
}