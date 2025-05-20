import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <section id='banner'>
        <div className="container">
            <div className="banner_col">
                <h1>Change Your wardrobe .Find exciting goods.</h1>
                <div className='relative w-[934px] mt-[36px]'><input type="text" placeholder='Search' /><img className=' absolute top-[50%] translate-y-[-50%] right-3' src="images/arrow.png" alt="" /></div>
                <div className="banner_buttons">
                    <button>Womenswear</button>
                    <button>Menswear</button>
                    <button>Kideswear</button>
                    <button>Beauty</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner