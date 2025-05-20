"use client"
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const CursorFlow = () => {
    const [axis,setAxis] = useState({y:0,x:0})

    useEffect(()=>{
        const handleMouseMove = (e)=>{
            setAxis({x:e.clientX,y:e.clientY})
        }
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    },[])
   

  return (
    <>
        <div className={`w-[5px] rounded-full transition translate-x-[-50%] translate-y-[-50%] duration-[.4s] h-[5px] bg-[#66d9ed] fixed z-[9999] pointer-events-none`}
        style={
            {
                left: axis.x,
                top: axis.y,
            }
        }
        />
        <h1 className={`w-[30px] rounded-full transition translate-x-[-50%] translate-y-[-50%] duration-[1s] h-[30px] border-[1px] border-[#66d9ed] bg-transparent fixed z-[9999] pointer-events-none`}
        style={
            {
                left: axis.x,
                top: axis.y,
            }
        }
        />
    </>
  )
}

export default CursorFlow