import { useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { AppState } from '../globalStore/rootReducer';
import { NoteData } from '../interfaces/notesListData';
import { initDeleteNotes, initDeleteNotesSuccessfull } from '../store/deleteNotes/actions';
import { initGetListData } from '../store/listNotes/actions';
import Swal from 'sweetalert2'

const ListNotes = () => {
    const dispatch = useDispatch();
    const { notesList, isNotesDataFetching } = useSelector((state: AppState) => state.NotesListReducer)
    const { success } = useSelector((state: AppState) => state.DeleteNotesReducer)

    useEffect(() => {
        dispatch(initGetListData())
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            dispatch(initGetListData())
            dispatch(initDeleteNotesSuccessfull(false))
        }
    }, [dispatch, success]);

    const handleClick = (id: string) => {
        Swal.fire({
            title: `Are you sure to delete the note with the id: ${id}?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(initDeleteNotes(id))
                Swal.fire(
                    'Deleted!',
                    `Your note with the id: ${id} has been deleted.`,
                    'success'
                );
            }
        })
    }

    if (isNotesDataFetching) {
        return (
            <>
                <Header />
                <Container>
                    <h1 className='mt-2 text-center'>View Notes</h1>
                    <Loading />
                </Container>
            </>
        )
    }

    return (
        <>
            <Header />

            <Container>
                <h1 className='mt-2 text-center'>View Notes</h1>
                <Row xs={1} md={4} className='g-2 m-1'>
                    {notesList && notesList.map((item: NoteData) => (
                        <Col key={item.id}>
                            <Card border='primary'>
                                <Card.Header key={item.id}>{item.id}
                                    <Button onClick={() => handleClick(item.id)} size='sm' variant='danger' className='position-absolute top-0 end-0 m-1'>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-trash' viewBox='0 0 16 16'>
                                            <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                                            <path fillRule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z' />
                                        </svg>
                                    </Button>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default ListNotes;