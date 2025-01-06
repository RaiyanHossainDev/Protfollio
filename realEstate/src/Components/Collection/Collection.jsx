import React from 'react'
import './Collection.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <section id='coll'>
        <div className="container">
            <div className="coll_head">
                <h2>Our collection
                best project</h2>
            </div>
            <div className="coll_card">
                <div className="single_coll_card">
                    <img src="images/collcard1.png" alt="" />
                    <div className="popUp">
                        <div className="text">
                            <h2>Treasury Tower</h2>
                            <p>Project Completed</p>
                        </div>
                        <Link className="ico">
                            <FaArrowRightLong />
                        </Link>
                    </div>
                </div>
                <div className="single_coll_card">
                    <img src="images/collcard2.png" alt="" />
                    <div className="popUp">
                        <div className="text">
                            <h2>Treasury Tower</h2>
                            <p>Project Completed</p>
                        </div>
                        <Link className="ico">
                            <FaArrowRightLong />
                        </Link>
                    </div>
                </div>
                <div className="single_coll_card">
                    <img src="images/collcard3.png" alt="" />
                    <div className="popUp">
                        <div className="text">
                            <h2>Treasury Tower</h2>
                            <p>Project Completed</p>
                        </div>
                        <Link className="ico">
                            <FaArrowRightLong />
                        </Link>
                    </div>
                </div>
                <div className="single_coll_card">
                    <img src="images/collcard4.png" alt="" />
                    <div className="popUp">
                        <div className="text">
                            <h2>Treasury Tower</h2>
                            <p>Project Completed</p>
                        </div>
                        <Link className="ico">
                            <FaArrowRightLong />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Collection