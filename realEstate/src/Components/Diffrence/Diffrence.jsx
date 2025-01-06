import React from 'react'
import './Diffrence.css'

const Diffrence = () => {
  return (
    <section id='diffrence'>
        <div className="container">
            <div className="diffrence_head">
                <h2>
                    What Make Us
                    Different?
                </h2>
                <p>
                    Check out our best service you can possibly orders in building
                    your company and don't forget to ask via our email or our
                    customer service if you are interested in using our services
                </p>
            </div>
            <div className="diffrence_card">
                <div className="single_diffrence_card">
                    <img src="images/diffrenceimg1.png" alt="" />
                    <h2>Experienced</h2>
                    <p>
                        Our experience of 25 years of
                        building and making
                        achievements in the world
                        of development
                    </p>
                </div>
                <div className="single_diffrence_card">
                    <img src="images/diffrenceimg2.png" alt="" />
                    <h2>competitive price</h2>
                    <p>
                        The prices we offer you are
                        very competitive without
                        reducing the quality of the
                        company's work in the
                        slightest
                    </p>
                </div>
                <div className="single_diffrence_card">
                    <img src="images/diffrenceimg3.png" alt="" />
                    <h2>On Time</h2>
                    <p>
                    We prioritize the quality of
                    our work and finish it on time
                    </p>
                </div>
                <div className="single_diffrence_card">
                    <img src="images/diffrenceimg4.png" alt="" />
                    <h2>Best Materials</h2>
                    <p>
                        The material determines the
                        building itself so we
                        recommend that you use
                        the best & quality materials
                        in its class.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Diffrence