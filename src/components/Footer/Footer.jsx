import React from 'react'
import "./Footer.css"
import { FacebookLogo, InstagramLogo, TwitterLogo } from '../../assets';
const Footer = () => {
  return (
    <footer className='black'>
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className='logo'>
              Sound<span className='red'>DZign</span>
            </a>

            <div className="social-icons">
              <a href="#">
                <img src={FacebookLogo} alt="" />
              </a>

              <a href="#">
                <img src={TwitterLogo} alt="" />
              </a>

              <a href="#">
                <img src={InstagramLogo} alt="" />
              </a>

            </div>
            <div className="copyright">
              This website is designed by Ans Maqsood &copy; 2024.
            </div>
          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">contact@gmail.com</a>
              </li>
              <li>
                <a href="#">+1 99 99999</a>
              </li>
            </ul>
          </div>
          <div className="copyright mobile">
              This website is designed by Ans Maqsood &copy; 2024.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
