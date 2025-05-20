'use client'
import React, { useEffect, useState } from 'react'
import './Footer.css'
import { SiGooglemaps } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
import Link from 'next/link';


const Footer = () => {
    const [animate,setAnimate] = useState({box1:false,box2:false})

    useEffect(()=>{
        const handleScroll = ()=>{
            const holder = document.getElementById('footer_animate')
            const rect = holder.getBoundingClientRect()
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setTimeout(()=>setAnimate((prev)=>({...prev,box1:true})),300)
                setTimeout(()=>setAnimate((prev)=>({...prev,box2:true})),500)
            }
        }
        window.addEventListener('scroll',handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll);

    },[])

  return (
    <footer>
        <div className="line1"/>
        <div className="container mx-auto bg-[#151414] rounded-[20px]">
            <div className="holder">
                <div className="footer_row row1">
                    <div className="single_contact">
                        <SiGooglemaps />
                        <div className="inner">
                            <h2>Find us</h2>
                            <p>Sherpur,  Mymenshingh, Bangldesh</p>
                        </div>
                    </div>
                    <div className="single_contact">
                        <IoCall />
                        <div className="inner">
                            <h2>Call us</h2>
                            <p>01712871414</p>
                        </div>
                    </div>
                    <div className="single_contact">
                        <IoIosMailOpen />
                        <div className="inner">
                            <h2>Mail us</h2>
                            <p>astralfog2@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="line"/>
                <div className="footer_row row2">
                    <div className="footer_text">
                        <Link href={'/'}><img src="/images/logo.png" width={266} alt="" /></Link>
                        <p>
                            Crafting stunning, <span>responsive</span>, and <span>user-friendly</span> web experiences. Let's build something amazing together!
                        </p>
                        <div className="media">
                            <h2>Media</h2>
                            <span className="verticalline"/>
                            <div className="icons">
                                <a href=""><img src="/images/facebook.png" alt="" /></a>
                                <a href=""><img src="/images/github.png" alt="" /></a>
                                <a href=""><img src="/images/linkedin.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer_comments" id='footer_animate'>
                        <div className={`singleCommentCard bg-[#bc60fb] ${animate.box1?'translate-y-0 opacity-[1]':' translate-y-[40px] opacity-0'} transition-all duration-[.7s]`}>
                            <img src="/images/kout.png" alt="" />
                            <p>
                            Amazing experience! The work was delivered on time with great attention to detail. Communication was smooth, and the final product exceeded my expectations. Highly recommended!
                            </p>
                            <br />
                            <h2>— Emma Roberts</h2>
                        </div>
                        <div className={`singleCommentCard bg-[#923fe6] ${animate.box2?'translate-x-[-20px] translate-y-[30px] opacity-[1]':'translate-x-[20px] translate-y-[60px] opacity-0'} transition-all duration-[.5s]`}>
                            <img src="/images/kout.png" alt="" />
                            <p>
                                Incredible attention to detail! My website was outdated and slow, but Raiyan Hossain transformed it into a fast, modern, and mobile-friendly platform. They kept me updated throughout the process and even suggested improvements I hadn’t thought of.
                            </p>
                            <br />
                            <h2>— James Carter</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto">
            <div className="rights">
                <h2>© Portfolio Website is Powered by Raiyan Hossain..</h2>
            </div>
        </div>
    </footer>
  )
}

export default Footer