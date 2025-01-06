import React from 'react'
import './Float.css'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const Float = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <BiLeftArrowAlt className='letfArr' />,
        nextArrow: <BiRightArrowAlt />,
      };

  return (
    <section id='float'>
            <div className="float_row">
                <div className="float_slider">
                    <Slider {...settings}>
                        <div>
                            <img src="images/floatimg.png" alt="" />
                        </div>
                        <div>
                            <img src="images/floatimg.png" alt="" />
                        </div>
                        <div>
                            <img src="images/floatimg.png" alt="" />
                        </div>
                        <div>
                            <img src="images/floatimg.png" alt="" />
                        </div>
                        <div>
                            <img src="images/floatimg.png" alt="" />
                        </div>
                    </Slider>
                </div>
                <div className="float_text">
                    <h2>
                        What we have done  & 
                        what our Customers say
                    </h2>
                    <p>
                        We are to help you build a excellent build, with
                        us nothing is impossible. See what we have done
                        and what they have to say about our work perform.
                    </p>
                </div>
            </div>
    </section>
  )
}

export default Float