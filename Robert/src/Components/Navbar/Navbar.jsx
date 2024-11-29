import React from 'react'
import './Navbar.css'
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='raiyan_nav'>
        <div className="menu_row">
            <div className="menu_p">
                <Link to={'/'}><h2>P</h2></Link>
            </div>
            <div className="menu_media">
                <div className="icons">
                    <Link to={'#'}><FaFacebookF /></Link>
                    <Link to={'#'}><FaTwitter /></Link>
                    <Link to={'#'}><FaLinkedin /></Link>
                </div>
            </div>
            <div className="main_menu">
                <ul>
                    <li><Link to={'/'}>HOME</Link></li>
                    <li><Link to={'/project'}>PROJECTS</Link></li>
                    <li><Link to={'/award'}>AWARDS</Link></li>
                    <li><Link to={'/testi'}>TESTIMONIALS</Link></li>
                    <li><Link to={'/blog'}>BLOG</Link></li>
                    <li><Link to={'/contact'}>CONTACT</Link></li>
                </ul>
                <div className="lisens">
                    <h4>+2(315) 590 83 68</h4>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar