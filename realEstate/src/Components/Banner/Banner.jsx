import React from 'react'
import './Banner.css'
import CountUp from 'react-countup'
import { FaPlus } from 'react-icons/fa'

const Banner = () => {
  return (
    <section id='banner'>
        <div className="container">
            <div className="banner_row">
                <div className="banner_text">
                    <h3>
                        <span>General</span>
                        <p>Project</p>
                    </h3>
                    <h1>
                        We Provide
                        Architectural design
                        and Construction
                    </h1>
                    <p>
                        ​More than 100 building and housing projects that we have built. 
                        The building owner chose us over other contractors in Jakarta,
                        because our work is different
                    </p>
                    <button>Discover More</button>
                    <div className="slates">
                        <div className="counter">
                            <div className="single_card">
                                <div className="num">
                                    <h2>
                                        <CountUp 
                                            end={300}
                                            duration={5}
                                        />
                                    </h2>
                                    <FaPlus />
                                </div>
                                <h3>
                                    Happy
                                    Client
                                </h3>
                            </div>
                            <div className="single_card">
                                <div className="num">
                                    <h2>
                                        <CountUp 
                                            end={900}
                                            duration={5}
                                        />
                                    </h2>
                                    <FaPlus />
                                </div>
                                <h3>
                                Amazing
                                Projects
                                </h3>
                            </div>
                            <div className="single_card">
                                <div className="num">
                                    <h2>
                                        <CountUp 
                                            end={20}
                                            duration={5}
                                        />
                                    </h2>
                                    <FaPlus />
                                </div>
                                <h3>
                                Awards
                                Winning
                                </h3>
                            </div>
                        </div>
                        <div className="year">
                            <div className="single_text">
                                <h2>General</h2>
                                <h3>Project</h3>
                            </div>
                            <div className="single_text2">
                                <h2>25 <span>Years</span></h2>
                                <h3>Operated</h3>
                                <img src="images/year-icon.png" alt="" />
                            </div>
                            <div className="single_text3">
                                <h3>
                                    As a trusted general project that has been 
                                    operating for 25 years, our commitment is
                                    always to prioritize our client satisfaction
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner