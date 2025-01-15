import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const MobileNav = () => {
    const [navShow,setNavShow] = useState(false)

    
  return (
    <nav id='MobileNav'>
      <div className="container">
        <div className="MobileMenu_row">
          <div className="menu_logo">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="main_menu">
            <FaBars onClick={()=>setNavShow(!navShow)} className=' cursor-pointer text-[25px]' />
            {
              navShow&&
                <ul>
                    <li><Link>our service</Link></li>
                    <li><Link>ABOUT US</Link></li>
                    <li><Link>PRODUCTS</Link></li>  
                    <li><Link>PET CARE</Link></li>
                    <li><Link>CONTACT</Link></li>
                </ul>
            }
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

export default MobileNav