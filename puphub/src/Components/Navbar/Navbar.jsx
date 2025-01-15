import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='nav'>
      <div className="container">
        <div className="menu_row">
          <div className="menu_logo">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="main_menu">
            <ul>
              <li><Link>our service</Link></li>
              <li><Link>ABOUT US</Link></li>
              <li><Link>PRODUCTS</Link></li>  
              <li><Link>PET CARE</Link></li>
              <li><Link>CONTACT</Link></li>
            </ul>
          </div>
          <div className="menu_button">
            <Link>Sign In</Link>
            <Link>Register</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar