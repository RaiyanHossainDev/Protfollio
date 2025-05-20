import React, { useState } from 'react'
import  './People.css'

const People = () => {
    const [img,setImg] = useState({img:'images/peoplePic1.png',title:'Hazel',})
    const [classs,setClass] = useState('')

  return (
    <section id='people'>
        <img src='images/peopleCurve.png' className="curve" />
        <div className="container">
            <div className="people_head">
                <h2>Meet the people of Hearthside</h2>
            </div>
            <div className="people_row">
                <div className="selection flex flex-col gap-[12px]">
                    <img onClick={()=>{setImg((prev)=>({...prev,img:'images/peoplePic1.png',title:'Hazel'})),setClass('anime')}} src="images/peopleselect1.png" alt="" />
                    <img onClick={()=>{setImg((prev)=>({...prev,img:'images/peoplePic2.png',title:'Or nam janina'})),setClass('anime')}} src="images/peopleselect2.png" alt="" />
                </div>
                <div className="people_main">
                    <img className={classs} src={img.img} alt="" />
                    <div className="main_text">
                        <h2>{img.title}</h2>
                        <p>
                            ami ai image ta google theke tuile disi.
                            karon figma te ar sobi silo nah. not my fault.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default People