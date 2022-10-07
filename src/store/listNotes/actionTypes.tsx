import { NoteData } from "../../interfaces/notesListData";

// List Notes
export const INIT_GET_LIST_DATA = 'INIT_GET_LIST_DATA';
export const FETCHING_GET_LIST_DATA = 'FETCHING_GET_LIST_DATA';
export const FETCHING_GET_LIST_DATA_SUCCESS = 'FETCHING_GET_LIST_DATA_SUCCESS';
export const FETCHING_GET_LIST_DATA_FAILED = 'FETCHING_GET_LIST_DATA_FAILED';

// List Notes Interfaces
export interface InitGetListDataAction {
  type: typeof INIT_GET_LIST_DATA
}

export interface FetchingGetListData {
  type: typeof FETCHING_GET_LIST_DATA,
  isNotesDataFetching: boolean,
}

export interface FetchingGetListDataSuccess {
  type: typeof FETCHING_GET_LIST_DATA_SUCCESS,
  notesList: NoteData[],
  isNotesDataFetching: boolean,
}

export interface FetchingGetListDataFailed {
  type: typeof FETCHING_GET_LIST_DATA_FAILED,
  isNotesDataFetchingFailed: boolean
}

export type NotesListAction = 
| InitGetListDataAction
| FetchingGetListData
| FetchingGetListDataSuccess
| FetchingGetListDataFailed;