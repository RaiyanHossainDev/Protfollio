import React from 'react'
import SideBar from '../Components/SiderBar/SideBar'
import Banner from '../Components/Banner/Banner'
import CommonDot from '../Components/CommonDot/CommonDot'

const Home = () => {
  return (
    <div className='bg-cover bg-no-repeat bg-center pt-[89px]' style={
      {
        backgroundImage: 'url(images/bg.png)',
      }
    }>
        <div className='flex'>
          <SideBar h2={'MY NAME IS RAIYAN'} p={"1.0"} gap={'468px'}/>
          <Banner/>
          <CommonDot/>
        </div>
    </div>
  )
}

export default Home