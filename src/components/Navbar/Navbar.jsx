import React from 'react'
import "./Navbar.css"
import { CloseIcon, Menuicon } from '../../assets';
import { useState } from "react"

const Navbar = () => {

  const [IsActive, setIsActive] = useState(false)

  return (
    <>
      <nav>
        <a href='#' className='logo'>
          Sound<span className='red'>DZign</span>
        </a>
        <ul className='menu-items'>
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#info">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <div onClick={() => setIsActive(true)} className="menu-icon">
          <img src={Menuicon} alt="" />
        </div>
      </nav>
      <div className={`mobile-menu-container ${IsActive ? "active" : ""}`}>
        <img src={CloseIcon} onClick={() => setIsActive(false)} className='close-icon' alt="" />

        <ul className='menu-items'>
          <li>
            <a href="#topics" onClick={() => setIsActive(false)}>Course Details</a>
          </li>
          <li>
            <a href="#info" onClick={() => setIsActive(false)}>About</a>
          </li>
          <li>
            <a href="#blog" onClick={() => setIsActive(false)}>Blog</a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setIsActive(false)}>Testimonials</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar
