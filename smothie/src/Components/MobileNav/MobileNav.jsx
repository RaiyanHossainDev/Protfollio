import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-router-dom'
import { FaBarcode } from 'react-icons/fa'

const MobileNav = () => {
    const [navShow,setNavShow] = useState(true)


  return (
    <nav id='mobileNav'>
      <div className="container">
        <div className="mobileMenu_row">
          <div className="menu_logo">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="main_menu">
            <FaBarcode onClick={()=>setNavShow(!navShow)} />
            <ul className={`${navShow?"left-[50%]":"left-[-100%]"}`}>
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

export default MobileNav