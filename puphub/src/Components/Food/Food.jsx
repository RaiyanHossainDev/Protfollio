import React from 'react'
import './Food.css'
import CommonButton from '../CommonButton/CommonButton'

const Food = () => {
  return (
    <section id='food'>
        <div className="container">
            <div className="food_head">
                <h2>Dog Nutrients & Food</h2>
            </div>
            <div className="food_row">
                <h2>25 % OFF all <span>Products</span> </h2>
                <CommonButton text={'View More'}/>
            </div>
            <div className="foods">
                <div className="singleFoodCard">
                    <img src="images/food1.png" alt="" />
                    <div className='pl-[34px]'>
                        <h2>Drools | 3KG</h2>
                        <p>Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food</p>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className="singleFoodCard">
                    <img src="images/food2.png" alt="" />
                    <div className='pl-[34px]'>
                        <h2>Canine Creek 4 KG</h2>
                        <p>Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food
                        </p>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className="singleFoodCard">
                    <img src="images/food3.png" alt="" />
                    <div className='pl-[34px]'>
                        <h2>Biscork Biscuits</h2>
                        <p>Adult chicken and egg Egg, Chicken  Dry Adult Dog Food</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Food