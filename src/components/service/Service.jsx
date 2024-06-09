import React, { useState } from 'react'
import "./service.css";
const Service = () => {
    const [toggleState, setToggleState]=useState(0);

    const toggleTab=(index)=>{
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">
        Roles   </h2>
    <span className='section__subtitle'>i can work as </span>
    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">Forntend <br/> Developer</h3>
            </div>
            <span className="services__button" onClick={()=> toggleTab(1)}>View More 
            <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Frontend Developer</h3>
                            <p className="services__modal-description">
                            Create and implement user interfaces for websites or web applications .
                            </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">
                           Understanding of web design principles and user experience UX concepts.
                           </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">
                           Work with frameworks and libraries like React or Angular to build complex frontend applications.                         </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">
                           Create ux element interactions.                           </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">

                           Optimizing the performance of your web applications .                          </p>
                            </li>

                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">
                           Design mockups and wireframes into interactive interfaces                        </p>
                            </li>
                        </ul>

                        
                    </div>
                </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title"> Backend <br/> Developer</h3>
            </div>
            <span className="services__button" onClick={()=> toggleTab(2)}>View More 
            <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title"> Backend Devekoper</h3>
                            <p className="services__modal-description">
building and maintaining the server-side of web applications or systems.                            </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">
work with programming languages such as Java , Python and JavaScript .                        </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">
                           designing and managing the database systems that store and retrieve data for web applications.                          </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">
                           design and build APIs (Application Programming Interfaces).                          </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">

                           ensuring the security and performance of web applications.                       </p>
                            </li>

                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">
                           deploying web applications to production environments.                         </p>
                            </li>
                        </ul>

                        
                    </div>
                </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-layer-group  services__icon"></i>
                <h3 className="services__title">Full Stack <br/> Developer</h3>
            </div>
            <span className="services__button" onClick={()=> toggleTab(3)}>View More 
            <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Full Stack Developer</h3>
                            <p className="services__modal-description">
                            Service with more than 3 years of experience.Providing quality work to clients and companies. 
                            </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">
                           building user interfaces for web applications
                           </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">
                           work with databases to store and retrieve data for your applications.                         </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">
                           Create and implement user interfaces for websites or web applications .</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">

                           work with programming languages such as Java , Python and JavaScript .                           </p>
                            </li>

                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">
                           Work with frameworks and libraries like React or Angular to build complex frontend applications.                         </p>
                         
                            </li>
                        </ul>

                        
                    </div>
                </div>
        </div>
    </div>
    </section>
  )
}

export default Service