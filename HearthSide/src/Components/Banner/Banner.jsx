import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section id='banner'>
        <div className="container">
            <div className="banner_row">
                <div className="banner_text">
                    <h1>Escape into
                    the rural life
                    <pre><img src="images/banner_star.png" alt="" /></pre>
                    </h1>
                    <p>
                        A heartwarming and tranquil farming sim game that
                        invites you to escape city life and embrace the
                        serene beauty of rural living. Play for free.
                    </p>
                    <Link>Download now</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner