import React, { useState } from 'react'
import './MobileNav.css'
import { Link, NavLink } from 'react-router-dom'
import { VscLayoutSidebarLeft } from 'react-icons/vsc'

const MobileNav = () => {
    // ============================== custom useStates
    const [menuShow,setMenuShow] = useState(false)



  return (
    <nav id='mobileNav'>
        <div className="container">
            <div className="menu_row mobileMenu_row">
                <div className="menu">
                    <Link to={'/'} className="menu_logo">
                        <img src="images/logo.png" alt="logo" />
                    </Link>
                    <div className="main_menu">
                        <div className="showMenu">
                            <VscLayoutSidebarLeft className='text-3xl cursor-pointer' onClick={()=>setMenuShow(!menuShow)} />
                        </div>
                        {
                            menuShow&&
                                <ul>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? "after:bg-white" : "after:bg-[#257251]"
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            isActive ? "after:bg-white" : "after:bg-[#257251]"
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            isActive ? "after:bg-white" : "after:bg-[#257251]"
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/help"
                                        className={({ isActive }) =>
                                            isActive ? "after:bg-white" : "after:bg-[#257251]"
                                        }
                                    >
                                        Help
                                    </NavLink>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
                <div className="buttons">
                    <Link className="trial button">
                        Start Free Trial
                    </Link>
                    <Link className="login button">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default MobileNav