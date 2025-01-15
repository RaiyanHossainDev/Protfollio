import React from 'react'
import './Detail.css'
import CommonButton from '../CommonButton/CommonButton'

const Detail = () => {
  return (
    <section id='detail'>
        <div className="container">
            <div className="detail_row">
                <div className="detail_text">
                    <h2>No one appreciates the very special genius of your conversation as the dog does.</h2>
                    <p>Sweet roll ice cream powder candy canes ice cream donut pudding biscuit ice cream.biscuit caramels topb</p>
                    <CommonButton text={'Explore More'}/>
                </div>
                <div className="detailimg">
                    <img src="images/detailimg.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Detail