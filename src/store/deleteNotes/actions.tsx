import {
    INIT_DELETE_NOTES,
    DELETE_NOTES_SUCCESSFULL,
    DELETE_NOTES_FAILED
} from './actionTypes';

// Add Notes

export const initDeleteNotes = (id: string) => {

    return {
        type: INIT_DELETE_NOTES,
        id
    }
}

export const initDeleteNotesSuccessfull = (success: boolean) => {

    return {
        type: DELETE_NOTES_SUCCESSFULL,
        success
    }
}

export const initDeleteNotesFailed = (failed: boolean) => {

    return {
        type: DELETE_NOTES_FAILED,
        failed
    }
}