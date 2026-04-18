
import '../App.css'


function Navbar() {
    return (
        <div className="main">
           <h2>ABDUL REHMAN</h2> 
          <nav >
            <ul className='navlinks'>
                <li><a href=""> <i class="fa-solid fa-house"></i>Home</a></li>
                <li><a href=""><i class="fa-solid fa-circle-user"></i>About</a></li>
                <li><a href=""><i class="fa-solid fa-briefcase"></i>My Work</a></li>
                <li><a href=""><i class="fa-jelly-fill fa-regular fa-address-card"></i>Contact</a></li>
            </ul>
          </nav>
            <button className='signupbtn'><i class="fa-solid fa-arrow-right-to-bracket"></i> Sign Up</button>
        </div>
    )
}

export default Navbar




