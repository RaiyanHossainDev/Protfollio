import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='nav'>
        <div className="container">
            <div className="main_menu">
                <ul>
                    <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-white font-bold" : "text-[#C4C4C4] font-medium"
                        }
                        >
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/Services"
                        className={({ isActive }) =>
                            isActive ? "text-white font-bold" : "text-[#C4C4C4] font-medium"
                        }
                        >
                        Services
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/Find"
                        className={({ isActive }) =>
                            isActive ? "text-white font-bold" : "text-[#C4C4C4] font-medium"
                        }
                        >
                        Find a Team
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/About"
                        className={({ isActive }) =>
                            isActive ? "text-white font-bold" : "text-[#C4C4C4] font-medium"
                        }
                        >
                        About Us
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/Articles"
                        className={({ isActive }) =>
                            isActive ? "text-white font-bold" : "text-[#C4C4C4] font-medium"
                        }
                        >
                        Articles
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/Portofolio"
                        className={({ isActive }) =>
                            isActive ? "text-white font-bold" : "text-[#C4C4C4] font-medium"
                        }
                        >
                        Portofolio
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/Contact us"
                        className={({ isActive }) =>
                            isActive ? "text-white font-bold" : "text-[#C4C4C4] font-medium"
                        }
                        >
                        Contact us
                    </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar