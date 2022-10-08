import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const nav = useNavigate();

    return (
        <Navbar bg='primary' variant='dark'>
            <Container>
                <Navbar.Brand><Nav.Link onClick={() => nav(`/`)}>Notes App</Nav.Link></Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link onClick={() => nav(`/`)}>List Notes</Nav.Link>
                    <Nav.Link onClick={() => nav(`/add-note`)}>Add Notes</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;