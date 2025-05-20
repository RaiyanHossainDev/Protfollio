import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container flex items-center mt-[100px] flex-col gap-4'>
        <img className='w-[700px] rounded-xl' src="/images/notfound.gif" alt="" />
        <h1 className='text-2xl font-bold'>WHY ARE YOU HERE!!!!!</h1>
        <Link className='text-2xl underline text-[#257251]' to={'/'}>Get Back Now</Link>
    </div>
  )
}

export default NotFound