import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-router-dom'
import { BsSliders2 } from 'react-icons/bs'

const MobileNav = () => {
    // ========================== UseState
    const [menu,setMenu] = useState(false)

  return (
    <nav id='MobileNav'>
      <div className="container">
        <div className="MobileMenu_row">
          <div className="menu_logo">
            <Link><img src="images/logo.png" alt="" /></Link>
          </div>
          <div className="drp_menu">
            <BsSliders2 onClick={()=>setMenu(!menu)} />
          </div>
          <div className={`main_menu ${menu?'left-[50%]':'left-[-50%]'}`}>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>About</Link></li>
                <li><Link to={'/'}>Destination</Link></li>
                <li><Link to={'/'}>Tour</Link></li>
                <li><Link to={'/'}>Blog</Link></li>
            </ul>
          </div>
          <div className="menu_button">
            <Link>Login</Link>
            <Link>Sign up</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MobileNav