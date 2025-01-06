import React from 'react'
import './Footer.css'
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Float from '../Float/Float'

const Footer = () => {
  return (
    <footer id='footer'>
        <Float/>
        <div className="container">
            <div className="footer_row">
                <div className="footer_text">
                    <h2>General Project</h2>
                    <p>
                        is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.
                    </p>
                    <div className="footer_media">
                        <Link><FaLinkedin /></Link>
                        <Link><FaGoogle /></Link>
                        <Link><FaTwitter /></Link>
                        <Link><FaInstagram /></Link>
                    </div>
                </div>
                <div className="footer_item">
                    <div className="single_item">
                        <h2>Company</h2>
                        <ul>
                            <li>About</li>
                            <li>How it Works</li>
                            <li>Term</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="single_item">
                        <h2>More</h2>
                        <ul>
                            <li>Documentation</li>
                            <li>License</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer