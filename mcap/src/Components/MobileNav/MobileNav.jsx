import React, { useState } from 'react'
import './MobileNav.css'
import { FaBars }         from 'react-icons/fa'
import { Link }           from 'react-router-dom'
import { FaBarsProgress } from 'react-icons/fa6'

const MobileNav = () => {
    // ======================== custom useStates
    const [menu,setMenu] = useState(false)



  return (
    <nav id        = 'MobileNav'>
    <div className = "container">
    <div className = "menu_row">
    <div className = "menu_image">
        <Link to={'/'}><img src       = "images/logo.png" alt = "logo" /></Link>
                </div>
                <div className = "main_menu">
                <div className = "dropDown" onClick={
                    ()=>{
                        setMenu(!menu)
                    }
                }>
                        <FaBarsProgress />
                    </div>
                </div>
                <div className = "menu_bar">
                    <FaBars />
                </div>
                
            </div>
            {
                menu&&
                <ul>
                    <li><Link>About</Link></li>
                    <li><Link>Project</Link></li>
                    <li><Link>Blog </Link></li>
                    <li><Link>Pricing </Link></li>
                    <li><Link>Studio </Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            }
        </div>
    </nav>
  )
}

export default MobileNav