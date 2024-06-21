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
                    <Link to="/add-card" className="nav-link">Add Card</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/login"} href="#" className="nav-link" onClick={handleAdd}>LogOut</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
