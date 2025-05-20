import React from 'react'
import './Head.css'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <header id='header'>
        <div className="header_row">
            <div className="header_image">
                <img src="images/logo.png" alt="logo" />
            </div>
            <div className="header_buttons">
                <Link to={'#'} className="">
                    sign up
                </Link>
                <Link to={'#'} className="">
                    Log in
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Head