import React, { useRef } from 'react'
import './Plan.css'
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { IoPaperPlane } from 'react-icons/io5';

const Plan = () => {
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
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
            responsive: [

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
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
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
    <section id='plan'>
        <div className="container">
            <div className="plan_head">
                <h2>
                Best  <span>vacation plan</span>
                </h2>
                <p>
                Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! 
                </p>
            </div>
            <div className="planSlider_container">
                <div className='arrows'>
                    <button className="button" onClick={previous}>
                        <BiLeftArrowAlt />
                    </button>
                    <button className="button" onClick={next}>
                        <BiRightArrowAlt />
                    </button>
                </div>
                <Slider {...settings} 
                        ref={slider => {
                            sliderRef = slider;
                        }}
                >
                    <div>
                        <div className="singlePlanCard">
                            <div className="cardImage">
                                <img src="images/plan1.png" alt="" />
                            </div>
                            <div className="card_text">
                               <h2>Rome, Italty <span>$5,42k</span></h2>
                               <h4><h3><IoPaperPlane />10 Days Trip </h3><span><FaStar />4.7</span></h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="singlePlanCard">
                            <div className="cardImage">
                                <img src="images/plan2.png" alt="" />
                            </div>
                            <div className="card_text">
                               <h2>London,UK <span>$2,42k</span></h2>
                               <h4><h3><IoPaperPlane />07 Days Trip </h3><span><FaStar />4.7</span></h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="singlePlanCard">
                            <div className="cardImage">
                                <img src="images/plan3.png" alt="" />
                            </div>
                            <div className="card_text">
                               <h2>Osaka,Japan <span>$5,42k</span></h2>
                               <h4><h3><IoPaperPlane />10 Days Trip </h3><span><FaStar />4.8</span></h4>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Plan