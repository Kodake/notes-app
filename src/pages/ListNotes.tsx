import { useEffect } from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { AppState } from '../globalStore/rootReducer';
import { NoteData } from '../interfaces/notesListData';
import { initGetListData } from '../store/listNotes/actions';

const ListNotes = () => {
    const dispatch = useDispatch();
    const { notesList, isNotesDataFetching } = useSelector((state: AppState) => state.NotesListReducer)

    useEffect(() => {
        dispatch(initGetListData())
    }, []);

    if (isNotesDataFetching) {
        return (
            <>
                <Header />
                <Container>
                    <h1 className="mt-2 text-center">View Notes</h1>

                    <Loading />
                </Container>
            </>
        )
    }

    return (
        <>
            <Header />

            <Container>
                <h1 className="mt-2 text-center">View Notes</h1>
                <Row xs={1} md={4} className="g-2 m-1">
                    {notesList && notesList.map((item: NoteData) => (
                        <Col>
                            <Card border="primary">
                                <Card.Header key={item.id}>{item.id}</Card.Header>
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