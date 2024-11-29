import React from 'react'
import './SideBar.css'

const SideBar = ({h2 , p ,gap}) => {
  return (
    <section id='raiyan_sidebar'>
        <div className={`sidebar_col`} style={
          {
            gap: gap,
          }
        }>
            <p>{p}</p>
            <h2>{h2}</h2>
        </div>
    </section>
  )
}

export default SideBar