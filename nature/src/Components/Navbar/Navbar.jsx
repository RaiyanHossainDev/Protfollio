import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='nav'>
        <div className="container">
            <div className="menu_row">
                <div className="menu">
                    <Link to={'/'} className="menu_logo">
                        <img src="images/logo.png" alt="logo" />
                    </Link>
                    <div className="main_menu">
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "after:bg-[#257251]" : "after:text-white"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "after:bg-[#257251]" : "after:text-white"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "after:bg-[#257251]" : "after:text-white"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/help"
                                    className={({ isActive }) =>
                                        isActive ? "after:bg-[#257251]" : "after:text-white"
                                    }
                                >
                                    Help
                                </NavLink>
                            </li>
                        </ul>
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

export default Navbar