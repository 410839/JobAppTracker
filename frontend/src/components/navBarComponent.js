import { Link } from 'react-router-dom'; 

export default function Navbar() {
    return (
        <div>
            <nav className="navbar" role= "Navigation">
                <ul>
                    <Link to="/">
                        Main Dashboard
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
