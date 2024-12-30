import React, { useRef } from 'react'
import './About.css'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';



const About = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
  return (
    <section id='about'>
        <div className="container">
            <div className="about_row">
                <div className="about_text">
                    <h2>
                    What people say 
                     <span> about Us.</span>
                    </h2>
                    <p>
                        We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. 
                    </p>
                    <div className='arrows'>
                        <button className="button" onClick={previous}>
                            <BiLeftArrowAlt />
                        </button>
                        <button className="button" onClick={next}>
                            <BiRightArrowAlt />
                        </button>
                    </div>
                </div>
                <div className="about_img">
                    <img src="images/aboutimg.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About