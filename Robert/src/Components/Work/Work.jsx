import React from 'react'
import './Work.css'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { HiArrowLongRight } from 'react-icons/hi2'

const Work = () => {
    // =============== custom useStates



  return (
    <section id='raiyan_work'>
        <div className="work_row">
            <div className="work_text">
                <h2>PROJETCS</h2>
                <ul>
                    <li>BERLING AGENCY WEBSITE <span className='ml-[280px]'><GoArrowUpRight /></span></li>
                    <li>PRETTYLITTLETHING AMERICAN SHOP<span className='ml-[166px]'><GoArrowUpRight /></span></li>
                    <li>BENHOME - ARCHITECTURE THEME<span className='ml-[187px]'><GoArrowUpRight /></span></li>
                    <li>GILHOUSE - ARCHITECTURE WBSITE<span className='ml-[180px]'><GoArrowUpRight /></span></li>
                    <li>GILBER - PERSONAL WEBSITE<span className='ml-[240px]'><GoArrowUpRight /></span></li>
                    <li>JONNY - PERSONAL WEBSITE<span className='ml-[240px]'><GoArrowUpRight /></span></li>
                </ul>
                <div className="text_button">
                    <p className='text-[15px] font-bee text-def'>View all works</p>
                    <Link to={'#'}><HiArrowLongRight /></Link>
                </div>
            </div>
            <div className="work_image">
                <div className='w-[1093px] h-[903px] bg-[#C4C4C4]'></div>
            </div>
        </div>
    </section>
  )
}

export default Work