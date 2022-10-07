import { combineReducers } from 'redux';
import AddNotesReducer from '../store/reducers';

const rootReducer = combineReducers({
    AddNotesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;