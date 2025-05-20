import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav id='navbar'>
        <div className="container">
            <div className="menu_row">
                <div className="menu_image">
                    <Link to={'/'}><img src="images/logo.png" alt="logo" /></Link>
                </div>
                <div className="main_menu">
                    <ul>
                        <li><Link>About</Link></li>
                        <li><Link>Project</Link></li>
                        <li><Link>Blog </Link></li>
                        <li><Link>Pricing </Link></li>
                        <li><Link>Studio </Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </div>
                <div className="menu_bar">
                    <FaBars />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar