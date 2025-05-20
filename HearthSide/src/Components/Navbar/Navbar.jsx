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
                <div className='flex gap-[48px] items-center'>
                    <div className="main_menu">
                        <ul>
                            <li><Link>Watch trailer</Link></li>
                            <li><Link>News</Link></li>
                            <li><Link>Support</Link></li>
                        </ul>
                    </div>
                    <div className="menu_buttons">
                        <Link className='download' >Download now</Link>
                        <Link className='sign'>Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar