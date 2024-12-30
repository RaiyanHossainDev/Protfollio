import React, { useRef } from 'react'
import './Deal.css'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const Deal = () => {
    // ============= slider settings
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 2000,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
      };

  return (
    <section id='deal'>
        <div className="container">
            <div className="deal_head">
                <h2>
                    Exclusive <span>deals & discounts</span>
                </h2>
                <p>
                Discover our fantastic early booking discounts & start planning your journey.

                </p>
            </div>
            <div className="dealSlider_container">
                <Slider {...settings} 
                        ref={slider => {
                            sliderRef = slider;
                        }}
                >
                    <div>
                        <div className="singleDealCard">
                            <div className="cardImage">
                                <img src="images/dealcard1.png" alt="" />
                                <div className="overlay">
                                    <button>Book Now</button>
                                </div>
                            </div>
                            <div className="card_text">
                                <h2>Madrid <span><FaStar />4.8</span></h2>
                                <h4><h3><FaLocationDot />Spain</h3><span className='price'><span>$950</span><p>$850</p></span></h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="singleDealCard">
                            <div className="cardImage">
                                <img src="images/dealcard2.png" alt="" />
                                <div className="overlay">
                                    <button>Book Now</button>
                                </div>
                            </div>
                            <div className="card_text">
                                <h2>Firenze <span><FaStar />4.5</span></h2>
                                <h4><h3><FaLocationDot />Italy</h3><span className='price'><span>$850</span><p>$750</p></span></h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="singleDealCard">
                            <div className="cardImage">
                                <img src="images/dealcard3.png" alt="" />
                                <div className="overlay">
                                    <button>Book Now</button>
                                </div>
                            </div>
                            <div className="card_text">
                                <h2>Paris <span><FaStar />4.4</span></h2>
                                <h4><h3><FaLocationDot />France</h3><span className='price'><span>$699</span><p>$599</p></span></h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="singleDealCard">
                            <div className="cardImage">
                                <img src="images/dealcard4.png" alt="" />
                                <div className="overlay">
                                    <button>Book Now</button>
                                </div>
                            </div>
                            <div className="card_text">
                                <h2>London <span><FaStar />4.8</span></h2>
                                <h4><h3><FaLocationDot />UK</h3><span className='price'><span>$850</span><p>$850</p></span></h4>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className='arrows'>
                    <button className="button" onClick={previous}>
                        <BiLeftArrowAlt />
                    </button>
                    <button className="button" onClick={next}>
                        <BiRightArrowAlt />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Deal