import React from 'react';
import { Link } from 'react-router-dom';
import FreeContact from './FreeContact.jsx';
import ProjectSection from './ProjectSection.jsx';
import { services } from '../data/serviceData.js';
import RightArrowShort from '../assets/images/svg/right-arrow-short.svg';
import AlliedLogo from '../assets/images/svg/Allied-Construction-Logo.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';

const ServiceDetailLayout = ({ service }) => {
    const headerStyle = {
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.90) 27.86%, rgba(0, 0, 0, 0.00) 100%), url(${service.images.banner})`,
    };

    return (
        <div>
            <section className="section-one">
                <div className="page-img-header" style={headerStyle}>
                    <div className="container">
                        <h1 className="img-header-text fade_down">{service.pageTitle}</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Services"> SERVICES /</Link>
                            <Link to={service.route}> {service.label}</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-eight" id="services-page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <h2 className="alliedconstruction-text fade_down pt-0">{service.introTitle}</h2>
                            <p className="fusce fade_down">{service.intro}</p>
                            <img className="plumbing-services-img2 img-animation-style4 reveal" src={service.images.content} alt={service.title} />
                            <p className="fusce fade_down mt-0">{service.details}</p>
                            <h2 className="interdum fade_down">{service.secondaryTitle}</h2>
                            <p className="fusce fade_down mt-0">{service.secondary}</p>
                            <div className="plan-body plumbing-body-list fade_down">
                                <ul>
                                    {service.checklist.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="plumbing-grid img-animation-style1 reveal">
                                <img src={service.images.middle1} alt={`${service.title} detail one`} />
                                <img src={service.images.middle2} alt={`${service.title} detail two`} />
                            </div>
                            <h2 className="interdum fade_down">{service.closingTitle}</h2>
                            <p className="fusce fade_down">{service.closing}</p>
                            <div className="accordion plumbing-services-accor fade_down" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How does Allied Constructions plan this service?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We begin with a site review, understand the scope, coordinate related trades, and then prepare a practical execution plan for quality delivery.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Can this be included with a renovation or construction project?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes. We can handle it as a standalone service or coordinate it with civil, interior, electrical, finishing, and handover activities.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Do you inspect the work before handover?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes. We review alignment, finish, safety, and usability before handover so the completed work is ready for daily use.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                            <div className="single-services-black-box">
                                <h3>Our Services</h3>
                            </div>
                            <div className="single-services-sub-box">
                                <ul>
                                    {services.map((item, index) => (
                                        <li key={item.key} className={`${index === 0 ? 'pt-0' : ''} ${index === services.length - 1 ? 'pb-0 border-bottom-0' : ''}`}>
                                            <Link to={item.route} className={item.key === service.key ? 'current-page-active' : ''}>{item.title}
                                                <img src={RightArrowShort} alt="right-arrow-short" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-seven">
                <FreeContact />
            </section>
            <section className="section-six ProjectSection">
                <ProjectSection />
            </section>
        </div>
    );
};

export default ServiceDetailLayout;
