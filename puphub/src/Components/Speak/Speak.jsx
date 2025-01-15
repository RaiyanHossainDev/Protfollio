import React from 'react'
import './Speak.css'
import { Link } from 'react-router-dom'
import CommonButton from '../CommonButton/CommonButton'

const Speak = () => {
  return (
    <section id='speak'>
        <div className="container">
            <div className="speak_row">
                <div className="speakimg">
                    <img src="images/speakimg.png" alt="" />
                    <Link><img  src="images/speakimg2.png" alt="" /></Link>
                </div>
                <div className="speakText">
                    <h2>Dogs do speak, but only to those who know how to listen.</h2>
                    <p>Sweet roll ice cream powder candy canes ice cream donut pudding biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding fruitcake cheesecake jelly-o. Pie muffin topping cake. Pudding biscuit caramels topb</p>
                    <CommonButton text={'Explore More'} />
                    <img src="images/speakimg3.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Speak