import React, { useState } from 'react'
import "./qualification.css"
const Qualification = () => {
    const [toggleState, setToggleState]=useState(1);

    const toggleTab=(index)=>{
        setToggleState(index);
    }
  return (
    <section className="qualification section" id='qualification'>
                <h2 className="section__title">
        Qualification    </h2>
    <span className='section__subtitle'>My personel journey</span>
    
    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div onClick={()=>toggleTab(1)} className={ toggleState === 1 ? "qualification__button qualification__active button--flex"
             : "qualification__button button--flex"}>
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Education
            </div>

            <div onClick={()=>toggleTab(2)} className={ toggleState === 2 ? "qualification__button qualification__active button--flex"
             : "qualification__button button--flex"}>
                <i className="uil uil-briefcase-alt qualification__icon"></i>
                Experience
            </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 ?"qualification__content qualification__content-active" :"qualification__content"}>
                <div className="qualification__data">
                       
                      
                        
                       <div>
                           <h3 className="qualification__title"> Software and Information System Engineering</h3>
                               <span className="qualification__subtitle">TEK-UP</span>
                               <div className="qualification__calender">
                                   <i className="uil uil-calendar-alt">
                                   </i>2023 - Present
                               </div>
                          </div>
                         

                       <div>
                       <span className="qualification__rounder"></span>
                       <span className="qualification__line">
                           
                       </span>
                       </div>
                      
                   </div>
                    <div className="qualification__data">
                       
                      <div></div>

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line">
                            
                        </span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title"> Master in Computer Science</h3>
                                <span className="qualification__subtitle">Faculty of Sciences of Tunis</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i>2022 - Present
                                </div>
                           </div>
                          

                        
                       
                    </div>

                    <div className="qualification__data">
                        
                        
                        <div>
                            <h3 className="qualification__title">Degree in computer science</h3>
                                <span className="qualification__subtitle">Faculty of Sciences of Tunis</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i>2020 - 2022 
                                </div>
                           </div>
                            
                           <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line">
                            
                        </span>
                        </div>
                    </div>

                    <div className="qualification__data">
                     
                    <div></div>

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line">
                            
                        </span>
                        </div>
                        
                       <div>
                           <h3 className="qualification__title">Bachelor of Science in Information</h3>
                               <span className="qualification__subtitle"> Hrairia 2 High School</span>
                               <div className="qualification__calender">
                                   <i className="uil uil-calendar-alt">
                                   </i>2019
                               </div>
                          </div>
                        

                        
                      
                   </div>
{/*
                   <div className="qualification__data">
                       <div></div>

                       <div>
                       <span className="qualification__rounder"></span>
                       <span className="qualification__line">
                           
                       </span>
                       </div>
                       
                       <div>
                           <h3 className="qualification__title"> UX Expert</h3>
                               <span className="qualification__subtitle">Spain - instutle</span>
                               <div className="qualification__calender">
                                   <i className="uil uil-calendar-alt">
                                   </i>2017 - 2018
                               </div>
                          </div>
                        
                   </div>
                    */}
                </div>
 

                <div className={toggleState === 2 ?"qualification__content qualification__content-active" :"qualification__content"}>
                    <div className="qualification__data">
                       
                      
                        
                        <div>
                            <h3 className="qualification__title"> Full Stack Developer </h3>
                                <span className="qualification__subtitle"> Tunis - One Gate Africa</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i>FEBRUARY 2022 – JUNE 2022
                                </div>
                           </div>
                          

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line">
                            
                        </span>
                        </div>
                       
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line">
                            
                        </span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title"> ------</h3>
                                <span className="qualification__subtitle">-----</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i>-------
                                </div>
                           </div>
                           <div>
                            <span className="qualificaton__rounder"> </span>
                                <span className="qualification__line">

                                </span>
                            
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                     
                    
                        
                       <div>
                           <h3 className="qualification__title"> ------------- </h3>
                               <span className="qualification__subtitle"> -------</span>
                               <div className="qualification__calender">
                                   <i className="uil uil-calendar-alt">
                                   </i>------
                               </div>
                          </div>
                        

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line">
                            
                        </span>
                        </div>
                      
                   </div>

                   <div className="qualification__data">
                       <div></div>

                       <div>
                       <span className="qualification__rounder"></span>
                       <span className="qualification__line">
                           
                       </span>
                       </div>
                       
                       <div>
                           <h3 className="qualification__title"> ------</h3>
                               <span className="qualification__subtitle">------</span>
                               <div className="qualification__calender">
                                   <i className="uil uil-calendar-alt">
                                   </i>---- - ----
                               </div>
                          </div>
                       
                   </div>
                </div>
            </div>

        
    </div>
    </section> 
  )
}

export default Qualification