import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { AppState } from '../globalStore/rootReducer';
import { NoteData } from '../interfaces/notesListData';
import { initGetListData } from '../store/listNotes/actions';
import './ViewNotes.css'

const ViewNotes = () => {
    const dispatch = useDispatch();
    const { notesList, isNotesDataFetching } = useSelector((state: AppState) => state.NotesListReducer)

    useEffect(() => {
        dispatch(initGetListData())
    }, []);

    if (isNotesDataFetching) {
        return (
            <>
                <Header />
                <div className="notes-list-wrapper">
                    <h1>View Notes</h1>

                    <div>Notes data is loading...</div>
                </div>
            </>
        )
    }

    return (
        <>
            <Header />
            <div className="notes-list-wrapper">
                <h1>View Notes</h1>

                <ul>
                    {notesList && notesList.map((item: NoteData) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ViewNotes;