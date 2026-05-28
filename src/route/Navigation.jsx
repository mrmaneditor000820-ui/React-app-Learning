import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Navbar from '../components/Navbar'
import Mywork from '../pages/Mywork'
import Contact from '../pages/Contact'

import Footer from '../pages/Footer'

function Navigation() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/mywork' element={<Mywork />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h5>Not found</h5>} />
      </Routes>
        <Footer/>
      </BrowserRouter > 
    )
}
export default Navigation

