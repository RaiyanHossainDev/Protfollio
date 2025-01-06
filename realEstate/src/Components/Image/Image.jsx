import React from 'react'
import './Image.css'

const Image = () => {
  return (
    <section id='image'>
        <div className="container">
            <div className="image_row">
                <img src="images/image1.png" alt="" />
                <img src="images/image2.png" alt="" />
                <img src="images/image3.png" alt="" />
                <img src="images/image4.png" alt="" />
                <img src="images/image5.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Image