import React from 'react'
import './Blog.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";

const Blog = () => {
    const settings = {
        dots: true,
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
        ],
        appendDots: dots => (
          <div
            style={{
              backgroundColor: "#FEFCFB",
              borderRadius: "10px",
              padding: "10px",
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '0px'
            }}
          >
            <ul style={{ margin: "0px", display:'flex',gap:'10px' }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "10px",
              height: '10px',
              borderRadius: "50%",
              backgroundColor: '#E5E5E5',
            }}
          >
            {i + 1}
          </div>
        )
      };
  return (
    <section id='blog'>
        <div className="container">
            <div className="blog_head">
                <h2>Get update with <span>latest blog</span></h2>
            </div>
            <div className="blogSlider_container">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <div className="singleBlogCard">
                                <img src="images/aboutimg1.png" alt="" />
                                <h2>Travel far enough, you meet yourself.</h2>
                                <p>July 27, 2021</p>
                            </div>
                        </div>
                        <div>
                            <div className="singleBlogCard">
                                <img src="images/aboutimg2.png" alt="" />
                                <h2>Travel far enough, you meet yourself.</h2>
                                <p>July 27, 2021</p>
                            </div>
                        </div>
                        <div>
                            <div className="singleBlogCard">
                                <img src="images/aboutimg3.png" alt="" />
                                <h2>How to Save Money While Visiting Africa .</h2>
                                <p>July 27, 2021</p>
                            </div>
                        </div>
                        <div>
                            <div className="singleAboutCard">
                                <img src="images/aboutimg4.png" alt="" />
                                <h2>Reflections on 5 Months of Travel: Time to Hang</h2>
                                <p>July 27, 2021</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog