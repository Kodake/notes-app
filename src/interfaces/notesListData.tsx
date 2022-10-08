export interface NoteData {
    id: string;
    name: string;
}

export interface NotesListData {
    data: NoteData[];
    status: number;
}