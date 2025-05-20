import React from 'react'
import './Vid.css'

const Vid = () => {
  return (
    <section id='vid'>
        <div className="container">
            <div className="vid_row">
                <div className="video">
                    <iframe width="800px" height="449px" src="https://www.youtube.com/embed/1R47EQrxgfw?si=-z4PzvjxaZePEyjV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <img src="images/vidHuman.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Vid