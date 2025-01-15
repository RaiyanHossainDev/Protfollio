import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <section id='service'>
        <div className="container">
            <div className="service_head">
                <h2>Services Category </h2>
            </div>
            <div className="services">
                <div className="singleServiceCard">
                    <img src="images/serv1.png" alt="" />
                    <h2>Grooming</h2>
                </div>
                <div className="singleServiceCard">
                    <img src="images/serv2.png" alt="" />
                    <h2>Healthcare</h2>
                </div>
                <div className="singleServiceCard">
                    <img src="images/serv3.png" alt="" />
                    <h2>Daycare</h2>
                </div>
                <div className="singleServiceCard">
                    <img src="images/serv4.png" alt="" />
                    <h2>Training</h2>
                </div>
                <div className="singleServiceCard">
                    <img src="images/serv5.png" alt="" />
                    <h2>Hyginic care</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service