import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return (
        <div>
            <ul className="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/cat-pics">Cat Photos</Link>
                </li>
            </ul>
            <hr className="bottom-bar"/>
        </div>
    );
}

export default NavBar;