import React from 'react'
import './Rating.css'
import CommonButton from '../CommonButton/CommonButton'

const Rating = () => {
  return (
    <section id='rate'>
      <div className="container">
        <div className="rating_col">
          <div className="rating_head">
            <h2>Happy Customer </h2>
          </div>
          <div className="ratingCard">
            <div className="singleRatingCard">
              <img src="images/ratingimg1.png" alt="" />
              <div className="card_text">
                <h2>Anna & Tobby</h2>
                <p>Amazing Products & Delivery on time.</p>
                <div className="rates">
                  <img src="images/rate.png" alt="" />
                  <img src="images/rate.png" alt="" />
                  <img src="images/rate.png" alt="" />
                  <img src="images/rate.png" alt="" />
                  <img src="images/norate.png" alt="" />
                  <span>4.2/5</span>
                </div>
              </div>
            </div>
            <div className="singleRatingCard">
              <img src="images/ratingimg2.png" alt="" />
              <div className="card_text">
                <h2>Christine & Tom</h2>
                <p>Love the overall Shpping experience!</p>
                <div className="rates">
                  <img src="images/rate.png" alt="" />
                  <img src="images/rate.png" alt="" />
                  <img src="images/rate.png" alt="" />
                  <img src="images/rate.png" alt="" />
                  <img src="images/rate.png" alt="" />
                  <span>4.2/5</span>
                </div>
              </div>
            </div>
            <div className="singleRatingCard">
              <img src="images/ratingimg3.png" alt="" />
              <div className="card_text">
                <h2>Sindy & Kitch</h2>
                <p>Kitch is love food from the pup-hub </p>
                <div className="rates">
                  <img src="images/rate.png" alt="" />
                  <img src="images/rate.png" alt="" />
                  <img src="images/rate.png" alt="" />
                  <img src="images/rate.png" alt="" />
                  <img src="images/rate.png" alt="" />
                  <span>4.2/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="button self-center mt-[85px]"><CommonButton text={'Explore More'}/></div>
        </div>
      </div>
    </section>
  )
}

export default Rating