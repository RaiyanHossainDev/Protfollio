import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='nav'>
      <div className='container mx-auto '>
         <div className='menu_row'>
            <div className='menu_logo'>
              <img src='/images/logo.png' alt=''/>
            </div>
            <div className='main_menu'>
              <ul>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/home'}>About</Link></li>
                <li><Link to={'/home'}>Features</Link></li>
                <li><Link to={'/home'}>Contact</Link></li>
              </ul>
            </div>
         </div>
      </div>
    </nav>
  )
}

export default Navbar