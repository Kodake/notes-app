import { combineReducers } from 'redux';
import AddNotesReducer from '../store/addNotes/reducers';
import DeleteNotesReducer from '../store/deleteNotes/reducers';
import NotesListReducer from '../store/listNotes/reducers';

const rootReducer = combineReducers({
    AddNotesReducer,
    DeleteNotesReducer,
    NotesListReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;