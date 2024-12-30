import React from 'react'
import './Footer.css'
import Subscribe from '../Subscribe/Subscribe'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id='footer' >
        <div className="container relative">
            <Subscribe/>
          <div className="footer_row">
            <div className="footer_text">
              <img src="images/logo.png" alt="" />
              <p>
              Book your trip in minute, get full
              Control for much longer.
              </p>
              <div className="icons">
                <Link><FaFacebookF /></Link>
                <Link><FaInstagram /></Link>
                <Link><FaTwitter /></Link>
              </div>
            </div>
            <div className="footer_drop">
              <div className="singleFooterDrop">
                <h2>Company</h2>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Logistic</a></li>
                  <li><a href="#">Privacy & Policy</a></li>
                </ul>
              </div>
              <div className="singleFooterDrop">
                <h2>Contact</h2>
                <ul>
                  <li><a href="#">Help/FAQ</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Affilates</a></li>
                </ul>
              </div>
              <div className="singleFooterDrop">
                <h2>More</h2>
                <ul>
                  <li><a href="#">Press Centre</a></li>
                  <li><a href="#">Our Blog</a></li>
                  <li><a href="#">Logistic</a></li>
                  <li><a href="#">Low fare tips</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="footer_row footer_row2">
            <h2>Copyright, Trabook 2022. All rights reserved.</h2>
            <h2>Terms & Conditions</h2>
          </div>
        </div>
    </footer>
  )
}

export default Footer