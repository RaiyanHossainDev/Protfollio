'use client'
import React from 'react'
import './Banner.css'
import Tilt from '3dtilt';

const Banner = () => {
  return (
    <section id='banner'>
        <div className="container mx-auto">
            <div className="banner_row">
                <Tilt>
                    <div className="banner_img">
                        <img src="/images/raiyan.png" alt="Raiyan Hossain" />
                    </div>
                </Tilt>
                <div className="banner_text">
                    <h1 >
                        <p>Hello there</p>
                        I'm 
                        <span>Raiyan Hossain</span>
                    </h1>
                    <p >Front End Developer / Web Designer / React JS Developer</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner