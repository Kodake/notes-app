import { NotesAction, SAVE_NOTES_VALUE_SUCCESSFULL, SAVE_NOTES_VALUE_FAILED, INIT_SAVE_NOTES_VALUE } from './actionTypes';

export type NotesState = {
  success: boolean;
  failed: boolean;
  notesValue: string;
}

const initialNotesState: NotesState = {
  success: false,
  failed: false,
  notesValue: '',
}

const AddNotesReducer = (state = initialNotesState, action: NotesAction) => {
  switch (action.type) {
    case INIT_SAVE_NOTES_VALUE:
      return {
        ...state,
        notesValue: action.notesValue
      };

    case SAVE_NOTES_VALUE_SUCCESSFULL:
      return {
        ...state,
        success: action.success
      };

    case SAVE_NOTES_VALUE_FAILED:
      return {
        ...state,
        success: action.failed
      };

    default:
      return state;
  }
}

export default AddNotesReducer;