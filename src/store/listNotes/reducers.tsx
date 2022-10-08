import { NoteData } from '../../interfaces/notesListData';
import { NotesListAction, FETCHING_GET_LIST_DATA, FETCHING_GET_LIST_DATA_SUCCESS, FETCHING_GET_LIST_DATA_FAILED } from './actionTypes';

export type NotesListState = {
  notesList: NoteData[];
  isNotesDataFetching: boolean;
  isNotesDataFetchingFailed: boolean;
}

const initialState: NotesListState = {
  notesList: [],
  isNotesDataFetching: false,
  isNotesDataFetchingFailed: false
}

export const NotesListReducer = (state = initialState, action: NotesListAction) => {
  switch (action.type) {
    case FETCHING_GET_LIST_DATA:
      return {
        ...state,
        isNotesDataFetching: true
      };

    case FETCHING_GET_LIST_DATA_SUCCESS:
      return {
        ...state,
        notesList: action.notesList,
        isNotesDataFetching: false
      };

    case FETCHING_GET_LIST_DATA_FAILED:
      return {
        ...state,
        isNotesDataFetchingFailed: true
      };

    default:
      return state;
  }
}

export default NotesListReducer;