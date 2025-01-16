import React from 'react'
import Banner from '../Components/Banner/Banner'
import Service from '../Components/Service/Service'
import Speak from '../Components/Speak/Speak'
import Food from '../Components/Food/Food'
import Detail from '../Components/Detail/Detail'
import Rating from '../Components/Rating/Rating'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Service/>
      <Speak/>
      <Food/>
      <Detail/>
      <Rating/>
    </div>
  )
}

export default Home