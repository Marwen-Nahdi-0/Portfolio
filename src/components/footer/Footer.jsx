import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
        Marwen Nahdi
        </h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          
         
         
        </ul>
        <div className="footer__social">
        <a href="https://www.linkedin.com/in/marwen-nehdi" className="footer__social-link" target="_blank">
        <i class="bx bxl-linkedin"></i>
        </a>
       
        <a href="https://github.com/Marwen-Nahdi-0" className="footer__social-link" target="_blank">
        <i class="bx bxl-github"></i>
        </a>
        </div>
        <span className='footer__copy'>
        &#169; MarwenNahdi. All rigths reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer