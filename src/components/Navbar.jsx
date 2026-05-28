



import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {
    return (
        <div className="main">

            {/* LOGO */}
            <h2 className="logo">ABDUL REHMAN</h2>

            {/* NAV LINKS */}
            <nav>
                <ul className='navlinks'>

                    <li>
                        <Link to="/">
                            <i className="fa-solid fa-house"></i>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/about">
                            <i className="fa-solid fa-circle-user"></i>
                            About
                        </Link>
                    </li>

                    <li>
                        <Link to="/mywork">
                            <i className="fa-solid fa-briefcase"></i>
                            My Work
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact">
                            <i className="fa-regular fa-address-card"></i>
                            Contact
                        </Link>
                    </li>

                </ul>
            </nav>

            {/* BUTTON */}
            <button className='signupbtn'>
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                Sign Up
            </button>

        </div>
    )
}

export default Navbar;







