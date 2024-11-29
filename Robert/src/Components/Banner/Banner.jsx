import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import { HiArrowLongRight } from 'react-icons/hi2'

const Banner = () => {
  return (
    <section id='banner'>
        <div className="banner_row">
            <div className="banner_text">
                <h1>GET<span className='ml-[184px]'>YOUR</span></h1>
                <p>Always available for freelance work, contact me and get your greate design :) </p>
                <h1>GREAT<span className='ml-[107px] block'>Design</span></h1>
                <p className='w-full lg:w-[380px]'>Hello, my name is Pattison and i am UX/UI designer and fron
                    t-end developer, im working via developer 9 years and i kn
                    ow all about design
                </p>
                <div className="text_button">
                    <p>(hire me :)</p>
                    <Link to={'#'}><HiArrowLongRight /></Link>
                </div>
                <div className="text_number">
                    <div className="single_number_card">
                        <h2>8</h2>
                        <h3>
                            <p>Years</p>
                            <p>experience</p>
                        </h3>
                    </div>
                    <div className="single_number_card">
                        <h2>5</h2>
                        <h3>
                            <p>Themeforest </p>
                            <p>awwards</p>
                        </h3>
                    </div>
                    <div className="single_number_card">
                        <h2>60</h2>
                        <h3>
                            <p>Projects</p>
                            <p>Done</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="banner_image">
                <img className='lg:w-[608px] ml-[59px] rounded-full' src="images/me.jpg" alt="" />
                <div className="image_circle">
                    <Link to={'#'}>Fill out the brief to find out the cost</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner