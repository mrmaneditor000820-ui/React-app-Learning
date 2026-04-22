
// import { Input } from './components/Input.jsx'
import './button.css'
import Navbar from './components/Navbar.jsx'
import products from './components/utils/Product.jsx'

function App() {

  return (
    <div>
  <Navbar/>

  {/* product data */}

  {
    products.map((products)=>{
      return console.log(products)
    })
  }
    </div>
  )
}

export default App


