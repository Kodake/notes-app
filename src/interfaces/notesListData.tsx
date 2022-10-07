export interface NoteData {
    id: number;
    name: string;
}

export interface NotesListData {
    data: NoteData[];
    status: number;
}