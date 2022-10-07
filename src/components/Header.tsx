import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const nav = useNavigate();

    return (
        <header className="header">
            <ul>
                <li onClick={() => nav(`/`)}>View Notes</li>
                <li onClick={() => nav(`/add-note`)}>Add Note</li>
            </ul>
        </header>
    )
}

export default Header;