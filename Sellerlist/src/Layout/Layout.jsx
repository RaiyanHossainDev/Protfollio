import React from 'react'
import { Outlet } from 'react-router-dom'
import Head from '../Components/Head/Head'
import Navbar from '../Components/Navbar/Navbar'

const Layout = () => {
  return (
    <div>
        <Head/>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout