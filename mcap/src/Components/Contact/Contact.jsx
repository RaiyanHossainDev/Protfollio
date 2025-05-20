import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
        <div className="container">
            <div className="con_row">
                <div className="con_text">
                    <h2>I enjoy</h2>
                    <h2 className=' italic'><span className='underline'>capturing</span> people</h2>
                    <p>-Ellina mary</p>
                    <img src="images/con_img.jpg" alt="" />
                </div>
                <div className="con_vid">
                    <img src="images/con_vid.png" alt="" />
                    <div className="red"></div>
                </div>
            </div>
            <div className="con_row con_row2">
                <h3>Hi there! <img src="images/hand.png" alt="" /></h3>
                <p>
                    You can express yourself however you want and whenev
                    er you want, for free. You can customize a template 
                    or make your own from scratch, with an immersive library at 
                    your disposal. You can express yourself however you want and 
                    whenever you  free.
                </p>
                <p>
                    You can customize a template or make your own from scratch, with an 
                    immersive library at your disposal.
                    <Link>Contact with Me<MdOutlineArrowRightAlt /></Link>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Contact