import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <section>
        <div className="container">
            <div className="team_row">
                <div className="team_head">
                    <h2>Our <span>Team</span></h2>
                </div>
            </div>
            <div className="team_row mt-[64px]">
                <div className="singleTeamCard">
                    <img src="images/team1.png" alt="" />
                    <h2>John Doe</h2>
                    <p>CEO & Founder</p>
                    <p className='w-[268px]'>
                        We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.
                    </p>
                </div>
                <div className="singleTeamCard">
                    <img src="images/team2.png" alt="" />
                    <h2>Font Lora</h2>
                    <p>Co-Founder & Head of Marketing</p>
                    <p className='w-[268px]'>
                        We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.
                    </p>
                </div>
                <div className="singleTeamCard">
                    <img src="images/team3.png" alt="" />
                    <h2>Jonh Smith</h2>
                    <p>CTO</p>
                    <p className='w-[268px]'>
                        We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.
                    </p>
                </div>
                <div className="singleTeamCard">
                    <img src="images/team4.png" alt="" />
                    <h2>Jane Smith</h2>
                    <p>Head of Data</p>
                    <p className='w-[268px]'>
                        We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team