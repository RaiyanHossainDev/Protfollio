import React from 'react'
import './CommonButton.css'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const CommonButton = ({text,link}) => {
  return (
    <Link className='commonButton' to={link}>{text}<MdOutlineKeyboardArrowRight /></Link>
  )
}

export default CommonButton