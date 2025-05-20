"use client"
import React, { useEffect, useState } from 'react'
import './Counter.css'
import CountUp from 'react-countup'

const Counter = () => {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const div = document.getElementById("onScreenAnimation");
        if (div) {
          const rect = div.getBoundingClientRect();          
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setBox1(true)
            setTimeout(()=>setBox2(true),150)
            setTimeout(()=>setBox3(true),250)
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll();
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <section id='counter'>
        <div className="container mx-auto flex justify-center">
            <div className="counter_row" id='onScreenAnimation'>
                <div className={`hover:-translate-y-2 group bg-neutral-50 duration-500 w-52 h-52 flex text-[black] flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md ${box1?'top-0 opacity-[10]':'top-[100px] opacity-[0]'}`}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute blur z-10 fill-blue-300 duration-500 group-hover:blur-none group-hover:scale-105">
                        <path transform="translate(100 100)" d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z" />
                    </svg>
                    <div className="z-20 flex flex-col justify-center items-center">
                        <span className="font-bold text-6xl ml-2">{box1?<CountUp end={50} duration={4}/>:0}+</span>
                        <p className="font-bold">Done Projects</p>
                    </div>
                </div>
                <div className={`hover:-translate-y-2 group bg-neutral-50 duration-500 w-52 h-52 flex text-[black] flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md ${box2?'top-0 opacity-[10]':'top-[100px] opacity-[0]'}`}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute blur z-10 fill-blue-300 duration-500 group-hover:blur-none group-hover:scale-105">
                        <path transform="translate(100 100)" d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z" />
                    </svg>
                    <div className="z-20 flex flex-col justify-center items-center">
                        <span className="font-bold text-6xl ml-2">{box2?<CountUp end={7} duration={4}/>:0}</span>
                        <p className="font-bold">Happy Clients</p>
                    </div>
                </div>
                <div className={`hover:-translate-y-2 group bg-neutral-50 duration-500 w-52 h-52 flex text-[black] flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md ${box3?'top-0 opacity-[10]':'top-[100px] opacity-[0]'}`}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute blur z-10 fill-blue-300 duration-500 group-hover:blur-none group-hover:scale-105">
                        <path transform="translate(100 100)" d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z" />
                    </svg>
                    <div className="z-20 flex flex-col justify-center items-center">
                        <span className="font-bold text-6xl ml-2">{box3?<CountUp end={2} duration={4}/>:0}</span>
                        <p className="font-bold">Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
        <img className='codePic' width={'654px'} src="/images/codePic.webp" alt="" />
    </section>
  )
}

export default Counter