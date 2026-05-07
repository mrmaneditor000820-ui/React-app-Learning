



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
                        <a href="/">
                            <i className="fa-solid fa-house"></i>
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="About">
                            <i className="fa-solid fa-circle-user"></i>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="Mywork">
                            <i className="fa-solid fa-briefcase"></i>
                            My Work
                        </a>
                    </li>

                    <li>
                        <a href="Contact">
                            <i className="fa-regular fa-address-card"></i>
                            Contact
                        </a>
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







