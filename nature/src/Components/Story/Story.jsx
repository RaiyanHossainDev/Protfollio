import React from 'react'
import './Story.css'

const Story = () => {
  return (
    <section id='story'>
        <div className="container">
            <div className="story_row">
                <div className="story_text">
                    <h2>Our <span>story</span></h2>
                    <p className='mt-[20px] md:mt-[90px]'>
                        We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.
                    </p>
                    <p className=' mt-[32px]'>
                        In that time, we’ve grown our network to include over 500 multinational businesses in 175 markets worldwide. The Under2 Coalition, for which we are the Secretariat, is made up of over 260 governments globally, representing 1.75 billion people and 50% of the global economy.
                    </p>
                    <button className='mt-[28px]'>Join the cause</button>
                </div>
                <div className="story_image">
                    <img src="images/story_img.png" alt="" />
                </div>
            </div>
            <div className="line"></div>
        </div>
    </section>
  )
}

export default Story