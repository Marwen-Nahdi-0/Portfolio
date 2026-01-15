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
    <div style={{cursor:"pointer"}} onClick={() => toggleTab(1)}>
        <i className="uil uil-web-grid services__icon"></i>
        <h3 className="services__title">
            Frontend <br /> Developer
        </h3>
    </div>

    <span
        className="services__button"
        onClick={() => toggleTab(1)}
    >
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
    </span>

    <div
        className={
            toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
        }
    >
        <div className="services__modal-content">
            <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
            ></i>

            <h3 className="services__modal-title">
                Frontend Development
            </h3>

            <p className="services__modal-description">
                Design and build responsive, user-friendly interfaces for web
                applications with a focus on usability and performance.
            </p>

            <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Apply web design principles and user experience (UX)
                        best practices.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Build dynamic and scalable interfaces using modern
                        frameworks and libraries.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Implement smooth interactions and reusable UI
                        components.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Optimize application performance and ensure
                        cross-browser compatibility.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Translate design mockups and wireframes into interactive
                        user interfaces.
                    </p>
                </li>
            </ul>
        </div>
    </div>
</div>


        <div className="services__content">
    <div style={{cursor:"pointer"}} onClick={() => toggleTab(2)}>
        <i className="uil uil-arrow services__icon"></i>
        <h3 className="services__title">
            Backend <br /> Developer
        </h3>
    </div>

    <span
        className="services__button"
        onClick={() => toggleTab(2)}
    >
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
    </span>

    <div
        className={
            toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
        }
    >
        <div className="services__modal-content">
            <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
            ></i>

            <h3 className="services__modal-title">
                Backend Development
            </h3>

            <p className="services__modal-description">
                Design, build, and maintain the server-side logic of web
                applications, ensuring reliability, security, and performance.
            </p>

            <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Develop backend features using various programming
                        languages and frameworks.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Design and manage databases to efficiently store,
                        retrieve, and process application data.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Build and integrate RESTful and other APIs to support
                        frontend and external services.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Ensure application security, scalability, and overall
                        backend performance.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Deploy and maintain backend services in production
                        environments.
                    </p>
                </li>
            </ul>
        </div>
    </div>
</div>

       <div className="services__content">
    <div style={{cursor:"pointer"}} onClick={() => toggleTab(3)}>
        <i className="uil uil-layer-group services__icon"></i>
        <h3 className="services__title">
            Full Stack <br /> Developer
        </h3>
    </div>

    <span
        className="services__button"
        onClick={() => toggleTab(3)}
    >
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
    </span>

    <div
        className={
            toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
        }
    >
        <div className="services__modal-content">
            <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
            ></i>

            <h3 className="services__modal-title">
                Full Stack Development
            </h3>

            <p className="services__modal-description">
                Build complete web applications by working across both frontend
                and backend layers, delivering reliable and maintainable
                end-to-end solutions.
            </p>

            <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Develop responsive and user-friendly interfaces for web
                        applications.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Design and manage databases to store, retrieve, and
                        process application data efficiently.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Implement backend logic and APIs to support application
                        features.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Work with different programming languages and frameworks
                        across the full application stack.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Collaborate on application architecture, testing, and
                        deployment processes.
                    </p>
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