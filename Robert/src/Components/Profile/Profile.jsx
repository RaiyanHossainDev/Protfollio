import React from 'react'
import './Profile.css'
import { HiArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <section>
        <div className="profile_row">
            <div className="profile_text">
                <h1>Explore<span className='ml-[133px]'>my</span></h1>
                    <p>I love my work and every project is my pride </p>
                    <h1><span className='ml-[153px] block'>profile</span></h1>
                    <p className=' mt-[48px] w-full lg:w-[380px]'>
                        Hello, my name is Pavel Suslov and i am UX/UI designer and front-end developer, im working via developer 9 years and i know all about design
                    </p>
                    <div className="profile_button">
                        <p>View behance</p>
                        <Link to={'#'}><HiArrowLongRight /></Link>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Profile