export const INIT_SAVE_NOTES_VALUE = 'INIT_SAVE_NOTES_VALUE'
export const SAVE_NOTES_VALUE_SUCCESSFULL = 'SAVE_NOTES_VALUE_SUCCESSFULL';
export const SAVE_NOTES_VALUE_FAILED = 'SAVE_NOTES_VALUE_FAILED';

export interface InitSaveNotesValueAction {
  type: typeof INIT_SAVE_NOTES_VALUE,
  notesValue: string
}

export interface SaveNotesValueSuccessfullAction {
  type: typeof SAVE_NOTES_VALUE_SUCCESSFULL,
  success: boolean,
  notesValue: string,
}

export interface SaveNotesValueFailedAction {
  type: typeof SAVE_NOTES_VALUE_FAILED,
  failed: boolean,
  notesValue: string,
}

export type NotesAction =
  | InitSaveNotesValueAction
  | SaveNotesValueSuccessfullAction
  | SaveNotesValueFailedAction;