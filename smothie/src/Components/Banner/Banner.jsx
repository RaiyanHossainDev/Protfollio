import React, { useState } from 'react'
import './Banner.css'

const Banner = () => {
    // ================ custom variables
    const [rotate,setRotate] = useState('lg:rotate-[-24deg] rotate-[0deg]')
    const [color,setColor]   = useState({bg:'bg-[#FFF7CF]',circleColor:'bg-[#F5DE6E]'})
    const [line,setLine]     = useState({banana:'after:bg-transparent',kiwi:'after:bg-transparent',blue:'after:bg-transparent',straw:'after:bg-transparent'})


    // ============= FUnction
    let handleBowl = (currentBowl)=>{
        if (currentBowl === 'banana') {
            setRotate('lg:rotate-[-24deg] rotate-[0deg]')
            setColor((prev)=>({...prev,bg:'bg-[#FFF7CF]',circleColor:'bg-[#F5DE6E]'}))
            setLine((prev)=>({...prev,banana:'after:bg-[#CAB449]',kiwi:'after:bg-transparent',blue:'after:bg-transparent',straw:'after:bg-transparent'}))
        }
        if (currentBowl === 'kiwi') {
            setRotate('lg:rotate-[154deg] rotate-[180deg]')
            setColor((prev)=>({...prev,bg:'bg-[#ECFFCC]',circleColor:'bg-[#8FB351]'}))
            setLine((prev)=>({...prev,banana:'after:bg-transparent',kiwi:'after:bg-[#4A7107]',blue:'after:bg-transparent',straw:'after:bg-transparent'}))
        }
        if (currentBowl === 'straw') {
            setRotate('lg:rotate-[66deg] rotate-[90deg]')
            setColor((prev)=>({...prev,bg:'bg-[#FFE1E2]',circleColor:'bg-[#FCB1B4]'}))
            setLine((prev)=>({...prev,banana:'after:bg-transparent',kiwi:'after:bg-transparent',blue:'after:bg-transparent',straw:'after:bg-[#BF676B]'}))
        }
        if (currentBowl === 'blue') {
            setRotate('lg:rotate-[-115deg] rotate-[-91deg]')
            setColor((prev)=>({...prev,bg:'bg-[#FFCBEA]',circleColor:'bg-[#C976A7]'}))
            setLine((prev)=>({...prev,banana:'after:bg-transparent',kiwi:'after:bg-transparent',blue:'after:bg-[#FFC1E6]',straw:'after:bg-transparent'}))
        }
    }



  return (
    <section id='banner' className={`${color.bg}`}>
        <div className="container">
            <div className="banner_row">
                <div className="banner_text">
                    <h1>
                        Sip Your Way to
                        Bliss Taste
                    </h1>
                    <p>
                        We're dedicated to bringing you deliciously fresh smoothies, made with love, care, and the finest ingredients.
                    </p>
                    <div className="banner_bowls">
                        <button className={`${line.banana} minbanana`} onClick={()=>handleBowl('banana')}><img src="images/Banana.png" alt="" /></button>
                        <button className={`${line.kiwi} minkiwi`} onClick={()=>handleBowl('kiwi')}><img src="images/Kiwi.png" alt="" /></button>
                        <button className={`${line.straw} minstraw`} onClick={()=>handleBowl('straw')}><img src="images/Strawberry.png" alt="" /></button>
                        <button className={`${line.blue} minblue`} onClick={()=>handleBowl('blue')}><img src="images/Bluberry.png" alt="" /></button>
                    </div>
                </div>
                <div className={`banner_image ${rotate} ${color.circleColor}`}>
                    <img className='banana' src="images/Bananaimg.png" alt="" />
                    <img className='straw' src="images/Strawberryimg.png" alt="" />
                    <img className='blue' src="images/Bluberryimg.png" alt="" />
                    <img className='kiwi' src="images/Kiwiimg.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner