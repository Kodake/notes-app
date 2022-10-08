// Delete Notes

export const INIT_DELETE_NOTES = 'INIT_DELETE_NOTES';
export const DELETE_NOTES_SUCCESSFULL = 'DELETE_NOTES_SUCCESSFULL';
export const DELETE_NOTES_FAILED = 'DELETE_NOTES_FAILED';

// Delete Notes Interfaces
export interface InitDeleteNotesAction {
  type: typeof INIT_DELETE_NOTES,
  id: string
}

export interface DeleteNotesSuccessfullAction {
  type: typeof DELETE_NOTES_SUCCESSFULL,
  id: string,
  success: boolean
}

export interface DeleteNotesFailedAction {
  type: typeof DELETE_NOTES_FAILED,
  id: string,
  failed: boolean
}

export type DeleteNotesAction =
  | InitDeleteNotesAction
  | DeleteNotesSuccessfullAction
  | DeleteNotesFailedAction;