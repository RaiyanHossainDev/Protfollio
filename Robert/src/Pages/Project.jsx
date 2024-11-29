import React from 'react'
import SideBar from '../Components/SiderBar/SideBar'
import Work from '../Components/Work/Work'
import CommonDot from '../Components/CommonDot/CommonDot'

const Project = () => {
  return (
    <section className='bg-cover bg-fixed bg-no-repeat bg-center pt-[89px] flex' style={
        {
          backgroundImage: 'url(images/project_bg.png)',
        }
      }>
        <SideBar h2={'Portfolio'} p={'2.0'} gap={'634px'} />
        <Work/>
        <CommonDot/>
    </section>
  )
}

export default Project