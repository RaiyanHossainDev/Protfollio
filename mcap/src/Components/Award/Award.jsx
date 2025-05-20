import React from 'react'
import './Award.css'

const Award = () => {
  return (
    <section id='award'>
        <div className="container">
            <div className="award_row">
                <div className="award_text">
                    <h2>Got many <span className='italic'>valuable <span className=' underline'>awards</span></span></h2>
                </div>
                <div className="award_vid">
                    <img src="images/award_img.png" alt="" />
                </div>
                <ul>
                    <li>2021 - The Artist Award</li>
                    <li>2020 - MKEL/Best Prir</li>
                    <li>2019 - Portrait Award</li>
                    <li>2018 - Berlin Talent</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Award