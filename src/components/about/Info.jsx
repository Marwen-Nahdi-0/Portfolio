import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class="uil uil-award-alt about__icon"></i>
          <h3 className="about__title">Experience
            </h3>  
            <span className="about__subtitle">
            1 Year Working

            </span>
        </div>
        <div className="about__box">
        <i class="uil uil-briefcase-alt about__icon"></i>
          <h3 className="about__title">Completed
            </h3>  
            <span className="about__subtitle">
            +15 Projects
            </span>
        </div>
        <div className="about__box">
            <i class="uil uil-graduation-cap about__icon"></i>
          <h3 className="about__title">graduation
            </h3>  
            <span className="about__subtitle">
              2 graduations           </span>
        </div>
    </div>
  )
}

export default Info