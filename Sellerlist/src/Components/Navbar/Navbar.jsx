import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='menu'>
        <div className="container">
            <div className="menu_row">
                <ul>
                    <li><Link to={'#'}>Womenswear</Link></li>
                    <li><Link to={'#'}>Menswear</Link></li>
                    <li><Link to={'#'}>Kideswear</Link></li>
                    <li><Link to={'#'}>Beauty</Link></li>
                    <li><Link to={'#'}>Hobbies</Link></li>
                    <li><Link to={'#'}>Medichine</Link></li>
                </ul>
                <div className="menu_button">
                    <Link to={'#'}>Sell items</Link>
                    <div className="cart">
                        <Link><img src="images/cart.png" alt="cart" /></Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar