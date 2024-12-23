import React from 'react'
import './History.css'

const History = () => {
  return (
    <section id='his'>
        <div className="container relative">
            <div className="history_col">
                <div className="history_head">
                    <h2>Our <span>History</span></h2>
                </div>
                <ul>
                    <li>
                        <h2>2000</h2>
                        <p>
                            We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.
                        </p>
                    </li>
                    <li>
                        <h2>2003</h2>
                        <p>
                            We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.
                        </p>
                    </li>
                    <li>
                        <h2>2015</h2>
                        <p>
                            We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.
                        </p>
                    </li>
                    <li>
                        <h2>2022</h2>
                        <p>
                            We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.
                        </p>
                    </li>
                    <div className="line"></div>
                </ul>
            </div>
            <div className="Leftline"></div>
        </div>
    </section>
  )
}

export default History