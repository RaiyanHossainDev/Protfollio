import React from 'react'
import './HelpSlider.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HelpSlider = () => {
    const settings = {
        className: "slider variable-width",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        variableWidth: true,
      };
  return (
    <section id='helpSlider'>
        <div className="container">
            <div className="helpSlider_text">
                <h2>
                    How to help
                </h2>
                <p>
                    Our goal is a world of net zero carbon emissions by 2050, with greater prosperity for all.
                </p>
            </div>
        </div>
        <div className="sliderContainer">
                <Slider className='!flex !gap-[20px]' {...settings}>
                    <div style={{ width: 396 }}>
                        <div className="singleSlideCard card1">
                            <h2>
                                Title
                            </h2>
                            <p>
                                We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.
                            </p>
                            <Link to={'#'} target='_blank'><FaArrowRight /></Link>
                        </div>
                    </div>
                    <div style={{ width: 396 }}>
                        <div className="singleSlideCard card2">
                            <h2>
                                Title
                            </h2>
                            <p>
                                We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.
                            </p>
                            <Link to={'#'} target='_blank'><FaArrowRight /></Link>
                        </div>
                    </div>
                    <div style={{ width: 396 }}>
                        <div className="singleSlideCard card3">
                            <h2>
                                Title
                            </h2>
                            <p>
                                We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.
                            </p>
                            <Link to={'#'} target='_blank'><FaArrowRight /></Link>
                        </div>
                    </div>
                    <div style={{ width: 396 }}>
                        <div className="singleSlideCard card4">
                            <h2>
                                Title
                            </h2>
                            <p>
                                We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.
                            </p>
                            <Link to={'#'} target='_blank'><FaArrowRight /></Link>
                        </div>
                    </div>
                </Slider>
            </div>
    </section>
  )
}

export default HelpSlider