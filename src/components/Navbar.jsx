
import '../App.css'


function Navbar() {
    return (
        <div className="main">
            <h2>ABDUL REHMAN</h2>
            <nav >
                <ul className='navlinks'>
                    <li><a href=""><span id='kuchbhi'><i class="fa-solid fa-house"></i></span><br></br>Home</a></li>
                    <li><a href=""><span id='kuchbhi'><i class="fa-solid fa-circle-user"></i></span><br></br>About</a></li>
                    <li><a href=""><span id='kuchbhi'><i class="fa-solid fa-briefcase"></i></span><br></br>My Work</a></li>
                    <li><a href=""><span id='kuchbhi'><i class="fa-jelly-fill fa-regular fa-address-card"></i></span><br></br>Contact</a></li>
                </ul>
            </nav>
            <button className='signupbtn'><a href=""><i class="fa-solid fa-arrow-right-to-bracket"></i> Sign Up</a></button>
        </div>
    )
}
export default Navbar











