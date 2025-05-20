'use client'
import React, { useEffect, useState } from 'react'
import './About.css'
import CountUp from 'react-countup'

const About = () => {
    const [skill,setSkil] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            const div = document.getElementById("skil");
            if (div) {
              const rect = div.getBoundingClientRect();          
              if (rect.top < window.innerHeight && rect.bottom > 0) {
                setSkil(true)
              }
            }
          };
      
          window.addEventListener("scroll", handleScroll);
          handleScroll();
      
          return () => window.removeEventListener("scroll", handleScroll);
    },[])
  return (
    <>
        <section id='about'>
            <div className="container mx-auto">
                <div className="about_row">
                    <div className="about_img">
                        <img src="/images/raiyan.png" alt="" />
                    </div>
                    <div className="about_text">
                        <h1>Hi, I’m <span>Raiyan Hossain</span>, a Web Developer with a passion for creating user-friendly websites and beautiful designs.</h1>
                        <h2>I live in Sherpur, Mymenshingh, Bangladesh. I specialize in Web Development, and I'm passionate about solving problems through code and crafting meaningful user experiences. Whether working on personal projects or collaborating with teams, I enjoy bringing ideas to life through web development.</h2>
                    </div>
                </div>
            </div>
        </section>
        <section id='skil'>
            <div className="container mx-auto">
                <h2>SKILLS</h2>
                <div className="skill_col">
                    <div className="singleSkil">
                        <h3 className={skill?"w-[85%] text-[18px]":'w-[0] text-[0]'}><p>HTML & CSS</p><p><CountUp end={85} duration={2}/>%</p></h3>
                    </div>
                    <div className="singleSkil">
                        <h3 className={skill?"w-[40%] text-[18px]":'w-[0] text-[0]'}><p>JavaScript</p><p><CountUp end={40} duration={2}/>%</p></h3>
                    </div>
                    <div className="singleSkil">
                        <h3 className={skill?"w-[95%] text-[18px]":'w-[0] text-[0]'}><p>React</p><p><CountUp end={95} duration={2}/>%</p></h3>
                    </div>
                    <div className="singleSkil">
                        <h3 className={skill?"w-[90%] text-[18px]":'w-[0] text-[0]'}><p>Tailwindcss</p><p><CountUp end={90} duration={2}/>%</p></h3>
                    </div>
                    <div className="singleSkil">
                        <h3 className={skill?"w-[50%] text-[18px]":'w-[0] text-[0]'}><p>Firebase</p><p><CountUp end={50} duration={2}/>%</p></h3>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About