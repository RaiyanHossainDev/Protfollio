import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='nav'>
      <div className="container">
        <div className="menu_row">
          <div className="menu_logo">
            <Link><img src="images/logo.png" alt="" /></Link>
          </div>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/'}>About</Link></li>
            <li><Link to={'/'}>Destination</Link></li>
            <li><Link to={'/'}>Tour</Link></li>
            <li><Link to={'/'}>Blog</Link></li>
          </ul>
          <div className="menu_button">
            <Link>Login</Link>
            <Link>Sign up</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar