import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MobileNav from '../Components/MobileNav/MobileNav'
import Footer from '../Components/Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <MobileNav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout