import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MobileNav from '../Components/MobileNav/MobileNav'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <MobileNav/>
        <Outlet/>
    </div>
  )
}

export default Layout