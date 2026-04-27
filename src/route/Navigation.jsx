
import React from 'react'
import  {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Navbar from '../components/Navbar'

function Navigation() {
    return (
      <BrowserRouter>
      <Navbar/>     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      </BrowserRouter> 
    )
}

export default Navigation
