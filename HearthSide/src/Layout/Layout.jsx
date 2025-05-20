import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MobNav from '../Components/MobNav/MobNav'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <MobNav/>
        <Outlet/>
    </div>
  )
}

export default Layout