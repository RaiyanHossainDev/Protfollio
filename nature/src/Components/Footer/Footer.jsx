import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer_row">
                <div className="footer_logo">
                    <img src="images/logo.png" alt="" />
                </div>
            </div>
            <div className="footer_row mt-[38px]">
                <div className="single_drop">
                    <h2>Product</h2>
                    <ul>
                        <li><Link to={'#'}>Individuals</Link></li>
                        <li><Link to={'#'}>Team</Link></li>
                        <li><Link to={'#'}>Enterprise</Link></li>
                        <li><Link to={'#'}>Pricing</Link></li>
                        <li><Link to={'#'}>Technology</Link></li>
                        <li><Link to={'#'}>Security</Link></li>
                        <li><Link to={'#'}>Integrations</Link></li>
                    </ul>
                </div>
                <div className="single_drop">
                    <h2>Company</h2>
                    <ul>
                        <li><Link to={'#'}>About</Link></li>
                        <li><Link to={'#'}>Careers</Link></li>
                        <li><Link to={'#'}>Login</Link></li>
                        <li><Link to={'#'}>Sign Up</Link></li>
                        <li><Link to={'#'}>News</Link></li>
                    </ul>
                </div>
                <div className="single_drop">
                    <h2>Resources</h2>
                    <ul>
                        <li><Link to={'#'}>How-tos</Link></li>
                        <li><Link to={'#'}>Case studies</Link></li>
                        <li><Link to={'#'}>Help</Link></li>
                    </ul>
                </div>
                <div className="single_drop">
                    <h2>Headquarters</h2>
                    <ul>
                        <li>
                            <Link className='w-[106px] inline-block' to={'#'}>
                                Your company 
                                address, Street,
                                & name
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="single_drop">
                    <h2>North America</h2>
                    <ul>
                        <li><Link className='inline-block w-[106px]' to={'#'}>
                                Your company 
                                address, Street,
                                & name
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="single_drop">
                    <h2>Connect</h2>
                    <ul className=' !flex-row !gap-2'>
                        <li><Link className=' !text-[22px]' to={'#'}><FaTwitter /></Link></li>
                        <li><Link className=' !text-[22px]' to={'#'}><FaFacebookF /></Link></li>
                        <li><Link className=' !text-[22px]' to={'#'}><FaLinkedinIn /></Link></li>
                    </ul>
                </div>
                <div className="single_drop">
                    <h2>Apps</h2>
                    <ul>
                        <li><Link to={'#'}> <img src="images/apple.png" alt="" /> </Link></li>
                        <li><Link to={'#'}> <img src="images/playStore.png" alt="" /> </Link></li>
                    </ul>
                </div>
            </div>
            <div className="line"/>
            <div className="footer_row row3">
                <h2>
                    Copyright 2022 Dan Williams™
                </h2>
                <h4>
                    <p>Privacy Policy </p>
                    <p>Terms of Use</p>
                    <p>DMCA and Copyright Abuse Policy</p>
                </h4>
            </div>
        </div>
    </footer>
  )
}

export default Footer