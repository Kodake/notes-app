import { NoteData } from '../../interfaces/notesListData';
import {
    INIT_GET_LIST_DATA,
    FETCHING_GET_LIST_DATA,
    FETCHING_GET_LIST_DATA_SUCCESS,
    FETCHING_GET_LIST_DATA_FAILED
} from './actionTypes';

// List Notes

export const initGetListData = () => {
    return {
        type: INIT_GET_LIST_DATA
    }
}

export const initFetchingGetListData = () => {
    return {
        type: FETCHING_GET_LIST_DATA
    }
}

export const initFetchingGetListDataSuccess = (notesList: NoteData[]) => {
    return {
        type: FETCHING_GET_LIST_DATA_SUCCESS,
        notesList
    }
}

export const initFetchingGetListDataFailed = () => {
    return {
        type: FETCHING_GET_LIST_DATA_FAILED
    }
}