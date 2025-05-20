import React from 'react'
import './Pic.css'

const Pic = () => {
  return (
    <section id='pic'>
        <div className="container">
            <div className="pic_col">
                <div className="singlePicCard">
                    <img src="images/pic1.png" alt="" />
                    <div className="text">
                        <h2>Experience mesmerizing
                        scenes & landscapes
                        <pre><img src="images/banner_star.png" alt="" /></pre>
                        </h2>
                        <p>
                            Step into the heart of our welcoming village, where
                            the warmth of community envelops you like a
                            comforting embrace.
                        </p>
                    </div>
                </div>
                <div className="singlePicCard">
                    <img className='lg:hidden' src="images/pic2.png" alt="" />
                    <div className="text">
                        <h2>Live the rural life with
                        friends & family
                        <pre><img src="images/banner_star.png" alt="" /></pre>
                        </h2>
                        <p>
                        Step into the heart of our welcoming village, where
                        the warmth of community envelops you like a
                        comforting embrace.
                        </p>
                    </div>
                    <img className='hidden lg:block' src="images/pic2.png" alt="" />
                </div>
                <div className="singlePicCard">
                    <img src="images/pic3.png" alt="" />
                    <div className="text">
                        <h2>Enjoy together
                        <pre><img src="images/banner_star.png" alt="" /></pre>
                        </h2>
                        <p>
                        Step into the heart of our welcoming village, where
                        the warmth of community envelops you like a
                        comforting embrace.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pic