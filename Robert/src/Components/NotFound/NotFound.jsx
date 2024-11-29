import React from 'react'
import Navbar from '../Navbar/Navbar'

const NotFound = () => {
  return (
    <article style={{
      backgroundImage : 'url(images/bg.png)',
    }}>
        <Navbar/>
        <div className="container">
            
            <img className={`
              w-full h-full pt-[90px]
              `} src="images/404.gif" alt="404" />
        </div>
    </article>
  )
}

export default NotFound