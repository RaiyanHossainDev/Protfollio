import React, { useState } from 'react'
import './MobNav.css'
import { Link } from 'react-router-dom'
import { FaBarcode } from 'react-icons/fa'

const MobNav = () => {
    const [nav,setNav] = useState(false)

  return (
    <nav id='MobNav'>
        <div className="container">
            <div className="MobMenu_row">
                <div className="menu_logo">
                    <img src="images/logo.png" alt="" />
                </div>
                <div className='flex gap-[20px] sm:gap-[48px] items-center flex-col sm:flex-row'>
                    <div className="main_menu">
                        <div className="bar">
                            <FaBarcode onClick={()=>setNav((prev)=>(!prev))}/>
                        </div>
                        <ul className={nav?'top-[162px] sm:top-[70px]':'top-[-100px]'}>
                            <li><Link>Watch trailer</Link></li>
                            <li><Link>News</Link></li>
                            <li><Link>Support</Link></li>
                        </ul>
                    </div>
                    <div className="menu_buttons">
                        <Link className='download' >Download now</Link>
                        <Link className='sign'>Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default MobNav