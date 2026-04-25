
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
      return (
        <div>
          <h1>{products.title}</h1>
          <h1>{products.Discription}</h1>
          <h1>{products.Price}</h1>
          <img src={products.image} alt={products.title} />
        </div>
      )
    })
  }
    </div>
  )
}

export default App


