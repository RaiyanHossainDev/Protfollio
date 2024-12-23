import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <section id='card'>
        <div className="container relative">
            <div className="card_row">
                {/* ================== card 1 ============== */}
                <div className="single_card card1">
                    <h2><span>Plant</span> a tree</h2>
                    <p>
                        We’ve compiled a list of effective ways to reduce your environmental footprint. The biggest game changers are labelled "top tips".
                    </p>
                    <button>Find Out</button>
                    <img src="images/card1_img.png" alt="" />
                </div>
                {/* ===================== card 2 =-=-=-=--=-=-=--=-=-=-=-*/}
                <div className="single_card card2 self-end mt-[149px]">
                    <h2><span>Live</span> sustainably</h2>
                    <p>
                        As well as making changes as an individual, you can join others to bring about bigger change. Right now communities across the country are fighting climate breakdown. See what's going on in your area.
                    </p>
                    <button>Donate now</button>
                    <img src="images/card2_img.png" alt="" />
                </div>
                {/* -==-=-=-=-=-=--=-=- card 3=-=-=---=-=-=-=-=-=- */}
                <div className="single_card card3 mt-[60px]">
                    <h2><span>Save</span> energy at home</h2>
                    <p>
                        If you're wondering what you can do about climate change and nature loss, look no further.
                    </p>
                    <button>Join the cause</button>
                    <img src="images/card3_img.png" alt="" />
                </div>
            </div>
            <div className="lien1"/>
            <div className="lien2"/>
        </div>
        <img className='left' src="images/cardPO1.png" alt="" />
        <img className='right' src="images/cardPO2.png" alt="" />
        <img className='center' src="images/cardPO3.png" alt="" />
    </section>
  )
}

export default Card