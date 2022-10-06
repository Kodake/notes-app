import { NotesAction, GetNotesValueAction, GET_NOTES_VALUE } from './actionTypes';

export type NotesState = {
  flag: boolean;
}

const initialState: NotesState = {
  flag: false,
}

const AddNotesReducer = (state = initialState, action: NotesAction) => {
  switch (action.type) {
    case GET_NOTES_VALUE:
      return {
        ...state,
        flag: true
      }

    default:
      return state;
  }
}

export default AddNotesReducer;