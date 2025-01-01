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
              <li><Link to={'#'}>All Recipes</Link></li>
              <li><Link to={'#'}>Vegan</Link></li>
              <li><Link to={'#'}>Gluten-Free</Link></li>
              <li><Link to={'#'}>Shop</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar