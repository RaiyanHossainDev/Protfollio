import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import CommonButton from '../CommonButton/CommonButton'

const Banner = () => {
  return (
    <section id='banner'>
        <div className="container">
            <div className="banner_row">
                <div className="banner_text">
                    <h1>Taking care <br />
                    for your Smart Dog !</h1>
                    <p>Human–canine bonding is the relationship between dogs and humans.</p>
                    <CommonButton text={'Explore More'}/>
                </div>
                <div className="banner_img">
                    <img src="images/bannerimg.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner