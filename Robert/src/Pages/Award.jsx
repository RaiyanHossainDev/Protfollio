import React from 'react'
import SideBar from '../Components/SiderBar/SideBar'
import Profile from '../Components/Profile/Profile'

const Award = () => {
  return (
    <section className='bg-cover bg-fixed bg-no-repeat bg-center pt-[89px] flex' style={
        {
          backgroundImage: 'url(images/award_bg.png)',
        }
      }>
        <SideBar h2={'MY AWARDS'} p={'3.0' } gap={'579px'}/>
        <Profile/>
    </section>
  )
}

export default Award