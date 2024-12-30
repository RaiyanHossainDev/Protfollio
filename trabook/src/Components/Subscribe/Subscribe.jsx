import React from 'react'
import './Subscribe.css'
import { IoMailOutline } from 'react-icons/io5'

const Subscribe = () => {
  return (
    <section id='sub'>
        <div className="sub_col">
            <h2>Subscribe and get exclusive deals & offer</h2>
            <div className="mailBar">
                <IoMailOutline />
                <input type="email" placeholder='Enter your mail' />
                <button>Subscribe</button> 
            </div>
        </div>
    </section>
  )
}

export default Subscribe