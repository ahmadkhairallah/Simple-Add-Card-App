import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar({ handleAdd }) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/add-card" className="nav-link">Add Form</Link>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link" onClick={handleAdd}>Add</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
