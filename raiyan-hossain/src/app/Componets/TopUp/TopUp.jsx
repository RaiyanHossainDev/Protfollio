"use client"
import React, { useEffect, useState } from 'react'
import './TopUp.css'

const TopUp = () => {
    const [topUp,setTopUp] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.scrollY > 500) {
                setTopUp(true)
            }else{
                setTopUp(false)
            }
        })
    },[])


    let scroll = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
  return (
    <div onClick={()=>scroll()} className={`${topUp?'opacity-[10]':'opacity-0'} topup transition-all duration-[.2s]`}>
        <button>
            <div className="text">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
            </div>
            <div className="clone">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
            </div>
            <svg strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="20px">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
        </button>
    </div>
  )
}

export default TopUp