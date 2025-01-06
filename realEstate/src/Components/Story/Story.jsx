import React from 'react'
import './Story.css'
import { Link } from 'react-router-dom'

const Story = () => {
  return (
    <section id='story'>
        <div className="container">
            <div className="story_row">
                <div className="story_text">
                    <h2>Our Story
                    Who we are</h2>
                    <p>
                        Established in 1992, PT. Wahana Cipta operates as a General
                        Contracting company with a footprint that we have planted
                        throughout Indonesia. Initially, we focused on construction in
                        the field of residential housing development in Jakarta. 
                        As the company grows, now we are present as a reliable...
                    </p>
                    <Link>See More</Link>
                </div>
                <div className="stort_image">
                    <img src="images/storyimg.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story