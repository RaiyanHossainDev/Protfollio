import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <section id='service'>
        <div className="container">
            <div className="service_head">
                <h2>
                Our Excellent
                Services
                </h2>
                <p>
                    Check out our best service you can possibly orders in building
                    your company and don't forget to ask via our email or our
                    customer service if you are interested in using our services
                </p>
            </div>
            <div className="service_card">
                <div className="single_service_card">
                    <img src="images/serviceimg1.png" alt="" />
                    <h2>Industrial</h2>
                    <p>
                        Industrial development is our main
                        line of business. We do Factory
                        Construction, Warehouse and others
                    </p>
                </div>
                <div className="single_service_card">
                    <img src="images/serviceimg2.png" alt="" />
                    <h2>Commercial</h2>
                    <p>
                    Our experience building in the
Commercial field includes Showrooms,
Supermalls and Office Buildings
                    </p>
                </div>
                <div className="single_service_card">
                    <img src="images/serviceimg3.png" alt="" />
                    <h2>Industrial</h2>
                    <p>
                    Residential development is the
beginning that has shaped us to this
day. Our development includes
Houses & Apartments
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service