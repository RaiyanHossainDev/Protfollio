import React from 'react'
import './News.css'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <section id='news'>
        <div className="container">
            <div className="news_head">
                <h2>News & Update</h2>
            </div>
            <div className="news_card">
                <div className="single_news_card">
                    <img src="images/newscard1.png" alt="" />
                    <h2>
                        <h3>
                            12
                            <span>Jan</span>
                        </h3>
                        <p>
                            Elements of Content in Epoxy Paint
                        </p>
                    </h2>
                    <p>
                        Epoxy paint and epoxy floor
                        contractor. Have you heard the two
                        terms? And what does that have to
                        do with the construction of existing
                        buildings? Epoxy itself is included in
                        the type of resin... <Link>Read more</Link>
                    </p>
                </div>
                <div className="single_news_card">
                    <img src="images/newscard2.png" alt="" />
                    <h2>
                        <h3>
                            12
                            <span>Jan</span>
                        </h3>
                        <p>
                        5 Right Steps in Warehouse Planning and Construction
                        </p>
                    </h2>
                    <p>
                    Planning the construction of a
                    warehouse for both industrial,
                    personal and other goods storage
                    must be done carefully. 
                    When the planning is done properly,
                    the construction is... <Link>Read more</Link>
                    </p>
                </div>
                <div className="single_news_card">
                    <img src="images/newscard3.png" alt="" />
                    <h2>
                        <h3>
                            12
                            <span>Jan</span>
                        </h3>
                        <p>
                        The Right Solution to Build a Sturdy Type 45 House
                        </p>
                    </h2>
                    <p>
                    Having a solid home is certainly
                    everyone's dream. How not, the
                    house is a place where the residents
                    can rest and take shelter from the
                    bad weather... <Link>Read more</Link>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default News