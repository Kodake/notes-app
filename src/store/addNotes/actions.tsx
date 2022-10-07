import { NoteData } from '../../interfaces/notesListData';
import {
    INIT_SAVE_NOTES_VALUE,
    SAVE_NOTES_VALUE_SUCCESSFULL,
    SAVE_NOTES_VALUE_FAILED
} from './actionTypes';

// Add Notes

export const initSaveNotesValue = (notesValue: string) => {

    return {
        type: INIT_SAVE_NOTES_VALUE,
        notesValue
    }
}

export const initSaveNotesValueSuccessfull = (success: boolean) => {

    return {
        type: SAVE_NOTES_VALUE_SUCCESSFULL,
        success
    }
}

export const initSaveNotesValueFailed = (failed: boolean) => {

    return {
        type: SAVE_NOTES_VALUE_FAILED,
        failed
    }
}