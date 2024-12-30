import React from 'react'
import Banner from '../Components/Banner/Banner'
import Todo from '../Components/Todo/Todo'
import Deal from '../Components/Deal/Deal'
import Plan from '../Components/Plan/Plan'
import About from '../Components/About/About'
import Blog from '../Components/Blog/Blog'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Todo/>
      <Deal/>
      <Plan/>
      <About/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home