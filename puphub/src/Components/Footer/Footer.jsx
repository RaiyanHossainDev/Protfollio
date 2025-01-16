import React from 'react'
import './Footer.css'
import { GoMail } from 'react-icons/go'
import CommonButton from '../CommonButton/CommonButton'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer_head">
                <h2>Join us with Affiliate program</h2>
                <div className="bar">
                    <GoMail />
                    <input type={`email`} placeholder='Type your email address here' />
                    <CommonButton text={'Submit now'} />
                </div>
            </div>
            <div className="footer_row">
                <div className="footer_text">
                    <h2>Follow on social</h2>
                    <div className="images flex gap-[28px] mt-[25px]">
                        <img src="images/footerfa.png" alt="" />
                        <img src="images/footerinsta.png" alt="" />
                    </div>
                </div>
                <div className="footer_items">
                    <div className="singleItem">
                        <h3>Boarding & Day care</h3>
                        <h2>(616)-459-8622</h2>
                        <p>2125  Howard Street ,Grand Rapids, MI  Michigan</p>
                    </div>
                    <div className="singleItem">
                        <h3>Health care</h3>
                        <h2>(616)-566-5896</h2>
                        <p>2125  Howard Street ,Grand Rapids, MI  Michigan</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="line"></div>
        <div className="container">
            <div className="footer_foot">
                <h2> © all rights reserved &  design  with love by bharat</h2>
                <ul>
                    <li><Link>our services</Link></li>
                    <li><Link>About us </Link></li>
                    <li><Link>Shipping</Link></li>
                    <li><Link>FAQ</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer