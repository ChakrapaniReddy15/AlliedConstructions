import React from 'react';
import { Link } from 'react-router-dom';
import Faq from '../components/Faq';
import TopRated from '../components/TopRated';
import ProjectSection from '../components/ProjectSection';
import FreeContact from '../components/FreeContact';
import { services } from '../data/serviceData.js';

const Services = () => {
    return (
        <div>
            <section className="section-one">
                <div className="page-img-header" id="services-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Our Services</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Services"> SERVICES</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-eight" id="services-page-section">
                <div className="container">
                    <div className="quality-main about-qulity-main fade_down">
                        <p className="quality">our services</p>
                    </div>
                    <div className="alliedconstruction-services-textMain">
                        <h2 className="alliedconstruction-text alliedconstruction-services services-page-text fade_down">
                            Allied Construction services for stronger, better-planned spaces
                        </h2>
                        <p className="fusce malesuada tellus fade_down mt-0">
                            We help with construction, renovation, repairs, and finishing work through clear planning,
                            careful site work, and quality checks.
                        </p>
                    </div>
                    <div className="row services-page-row">
                        {services.map((service) => (
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 services-page-col" key={service.key}>
                                <Link to={service.route} className="services-slider-box">
                                    <img className="services-icon" src={service.images.home} alt={service.title} />
                                    <div className="services-icon-box">
                                        <img className="plumbing" src={service.icon} alt={service.key} />
                                        <h2 className="services-solution-main-text">{service.title}</h2>
                                        <p className="aliquam-text">{service.summary}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section-seven">
                <FreeContact />
            </section>
            <section className="section-six pb-0 ProjectSection">
                <ProjectSection />
            </section>
            <section className="curved-section">
                <TopRated />
            </section>
            <section className="installation-section pt-0">
                <Faq />
            </section>
        </div>
    );
};

export default Services;
