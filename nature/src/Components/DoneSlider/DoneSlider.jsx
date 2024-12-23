import React from 'react'
import './DoneSlider.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const DoneSlider = () => {
    const settings = {
        className: "slider variable-width",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        variableWidth: true,
      };
  return (
    <section id='DoneSlider'>
        <div className="slide_container container">
                <Slider className='' {...settings}>
                    <div style={{ width: 262 }}>
                        <Link to={'#'}><img src="images/doneimg1.png" alt="" /></Link>
                    </div>
                    <div style={{ width: 262 }}>
                        <Link to={'#'}><img src="images/doneimg2.png" alt="" /></Link>
                    </div>
                    <div style={{ width: 262 }}>
                        <Link to={'#'}><img src="images/doneimg3.png" alt="" /></Link>
                    </div>
                    <div style={{ width: 262 }}>
                        <Link to={'#'}><img src="images/doneimg4.png" alt="" /></Link>
                    </div>
                    <div style={{ width: 262 }}>
                        <Link to={'#'}><img src="images/doneimg5.png" alt="" /></Link>
                    </div>
                </Slider>
                <div className="line"></div>
        </div>
    </section>
  )
}

export default DoneSlider