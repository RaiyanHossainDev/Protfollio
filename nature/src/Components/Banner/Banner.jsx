import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <section id='banner'>
        <div className="container">
            <div className="banner_row">
                <div className="banner_text">
                    <h1>
                        Think positive
                        about our <span className='relative z-[0]'>Climate</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget maecenas eget sit et rhoncus. Sit consectetur.
                    </p>
                    <div className="signUpBar">
                        <input type="email" placeholder='name@company.com' />
                        <button>Sign up</button>
                    </div>
                </div>
                <div className="banner_image">
                    <img src="images/banner_img.png" alt="" />
                </div>
            </div>
            <div className="banner_bg">
                <img src="images/banner_bg.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Banner