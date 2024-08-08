import React from 'react'
import "./Info.css"
import { studenticon, videoicon, bgelement2 } from "../../assets"

const Info = () => {
  return (
    <section id='info' className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studenticon} alt='Student Icon' />
            <div className="amount">23,000+</div>
            <div className="type">Students</div>
          </div>
          <div className="info-content">
            <img src={videoicon} alt='Video Icon' />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>
        <img className='bg-element-2' src={bgelement2} alt='Element Photo' />
      </div>
    </section>
  );
};

export default Info
