import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Navbar from '../components/Navbar'
import Mywork from '../pages/Mywork'
import Contact from '../pages/Contact'
import ProtectedRoute from './ProtectedRoute'
import Footer from '../pages/Footer'

function Navigation() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoute />}>
        <Route path='/About' element={<About />} />
        <Route path='/Mywork' element={<Mywork />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<h5>Not found</h5>} />
      </Route>
    </Routes>
        <Footer/>
      </BrowserRouter > 
    )
}
export default Navigation

