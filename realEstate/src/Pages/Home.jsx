import React from 'react'
import Banner from '../Components/Banner/Banner'
import Image from '../Components/Image/Image'
import Service from '../Components/Service/Service'
import Diffrence from '../Components/Diffrence/Diffrence'
import Team from '../Components/Team/Team'
import Story from '../Components/Story/Story'
import News from '../Components/News/News'
import Collection from '../Components/Collection/Collection'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Image/>
      <Service/>
      <Diffrence/>
      <Team/>
      <Story/>
      <News/>
      <Collection/>
      <Footer/>
    </div>
  )
}

export default Home