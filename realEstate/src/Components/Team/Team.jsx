import React from 'react'
import './Team.css'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Team = () => {
  return (
    <section id='team'>
        <div className="container">
            <div className="team_row">
                <div className="team_image">
                    <img src="images/teamimg.png" alt="" />
                </div>
                <div className="team_text">
                    <h2>
                        Meet and talk with
                        our best architecture
                    </h2>
                    <p>
                        All our teams are professional and competent in
                        their fields and will help you realize your dream
                        building with the excellent result.
                    </p>
                    <div className="buttons">
                        <button className='btn1'>See all team</button>
                        <button className='btn2'>How it works<FaLongArrowAltRight /></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team