import React from 'react'
import './Banner.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Banner = () => {
  return (
    <section id='banner'>
        <div className="container flex flex-col items-center">
            <div className="banner_row">
                <div className="banner_text">
                    <h1>
                        Get started your exciting <span>journey</span>
                        with us.
                    </h1>
                    <p>
                        A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. 
                    </p>
                    <button>Discover Now</button>
                </div>
                <div className="banner_image">
                    <img src="images/banner-img.png" alt="" />
                </div>
            </div>
            <div className="banner_explore">
                <div className="single_explore">
                    <h2>Location<MdOutlineKeyboardArrowDown /></h2>
                    <p>Where are you going</p>
                </div>
                <div className="single_explore">
                    <h2>Date<MdOutlineKeyboardArrowDown /></h2>
                    <p>When you will go</p>
                </div>
                <div className="single_explore">
                    <h2>Guest<MdOutlineKeyboardArrowDown /></h2>
                    <p>Number of guest</p>
                </div>
                <button>Explore Now</button>
            </div>
        </div>
    </section>
  )
}

export default Banner