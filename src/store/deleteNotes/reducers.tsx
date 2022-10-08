import { DeleteNotesAction, DELETE_NOTES_FAILED, DELETE_NOTES_SUCCESSFULL, INIT_DELETE_NOTES } from './actionTypes';

export type DeleteNotesState = {
  success: boolean;
  failed: boolean;
  id: string;
}

const initialState: DeleteNotesState = {
  success: false,
  failed: false,
  id: '',
}

const DeleteNotesReducer = (state = initialState, action: DeleteNotesAction) => {
  switch (action.type) {
    case INIT_DELETE_NOTES:
      return {
        ...state,
        id: action.id,
      };

    case DELETE_NOTES_SUCCESSFULL:
      return {
        ...state,
        success: action.success
      };

    case DELETE_NOTES_FAILED:
      return {
        ...state,
        success: action.failed
      };

    default:
      return state;
  }
}

export default DeleteNotesReducer;