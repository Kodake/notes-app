export const  GET_NOTES_VALUE = 'GET_NOTES_VALUE';
export interface GetNotesValueAction {
    type: typeof GET_NOTES_VALUE 
}

export type NotesAction =
  | GetNotesValueAction;