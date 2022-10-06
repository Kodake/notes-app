import { GET_NOTES_VALUE } from "./actionTypes"

export const getNotesValue = (notesValue: string) => {
    return {
        type: GET_NOTES_VALUE,
        notesValue
    }
}