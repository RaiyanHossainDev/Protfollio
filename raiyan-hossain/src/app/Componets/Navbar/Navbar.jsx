'use client'
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Navbar = () => {
  const [navShow,setNavShow] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if (window.scrollY > 919) {
        setNavShow(true)
      }else{
        setNavShow(false)
      }
    })
  },[])
  

  return (
    <nav className={`${navShow?'fixed top-0 backdrop-blur-2xl':'absolute top-0'} w-full z-[9999] transition-all duration-[.4s]`}>
        <div className="container mx-auto">
          <div className={`${navShow?"":'py-[20px]'} menu_row`}>
            <div className="menu_logo">
              <Link href={'/'}>
                <img src="images/logo.png" alt="" />
              </Link>
              <span/>
            </div>
            <div className="menu_btn">
              <Link  href={'#'}>Hire me on <span className={`text-[20px] font-[900]`}>Fiverr</span></Link>
            </div>
            <div className="main_menu">
              <ul className={`${navShow?"text-[#79e7ff]":"text-[white]"}`}>
                <li><Link className={navShow?'hover:text-[white]':'hover:text-[gray]'} href={'/'}>Home</Link></li>
                <li><Link className={navShow?'hover:text-[white]':'hover:text-[gray]'} href={'/about'}>About</Link></li>
                <li><Link className={navShow?'hover:text-[white]':'hover:text-[gray]'} href={'/prot'}>Protfollio</Link></li>
                <li><Link className={navShow?'hover:text-[white]':'hover:text-[gray]'} href={'/contact'}>Contact</Link></li>
              </ul>

              <div className="line"/>

              <div className="icon">
                <ul>
                  <li><a target='_blank' href="https://www.facebook.com/profile.php?id=61560189862077"><FaFacebookF /></a></li>
                  <li><a target='_blank' href="https://github.com/RaiyanHossainDev"><FiGithub /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar