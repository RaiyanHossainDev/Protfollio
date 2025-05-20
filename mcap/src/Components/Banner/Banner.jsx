import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div id        = 'banner'>
      <div className = "banner_texture">
        <div className = "red"></div>
        <div className = "gray"></div>
      </div>
      <div className="container">
        <div className = "banner_row">
            <div className="banner_tag">
              <h2>Elliana Mary</h2>
              <p>Professional Photographer</p>
            </div>
            <div className="banner_text">
              <h1>
                Love to <br />
                <span className='italic underline'>capture</span> the <br />
                best <span className=' italic underline'>moments</span>
              </h1>
              <p>Distinctively re-engineer process-centric growth
                strategies without granular process improvements.
              </p>
              <div className="banner_vid">
                <img src="images/banner_vid.png" alt="watch" />
              </div>
              <div className="banner_link">
                <a target='_blank' href='#'>Facebook</a>
                <a target='_blank' href='#'>Twitter</a>
                <a target='_blank' href='#'>Instagram</a>
                <a target='_blank' href='#'>Linkedin</a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Banner