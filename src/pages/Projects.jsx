import React from 'react'
import ArrowCrossSvg from '../assets/images/svg/arrow-cross.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import { Link } from 'react-router-dom';
import TopRated from '../components/TopRated';
import Faq from '../components/Faq';
import { projects } from '../data/projectData.js';

const Projects = () => {
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="project-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Our Projects</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Projects">Projects</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="quality-main about-qulity-main fade_down">
                        <p className="quality">allied projects</p>
                    </div>
                    <div className="alliedconstruction-services-textMain">
                        <h2 className="alliedconstruction-text alliedconstruction-services project-page-heading fade_down">Visit our Allied Construction
                            projects
                        </h2>
                        <p className="fusce malesuada tellus fade_down mt-0">Explore selected work across construction,
                            renovation, roofing, utilities, and finishing. Each project reflects coordinated execution and
                            attention to practical site details.
                        </p>
                    </div>
                    <div className="row project-page-row">
                        {[0, 1, 2].map((columnIndex) => (
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 project-page-col" key={columnIndex}>
                                {projects.filter((_, index) => index % 3 === columnIndex).map((project, index) => (
                                    <div className="img-wrapper" key={project.slug}>
                                        <img className={index % 2 === 0 ? 'estimate-img' : ''} src={project.image} alt={project.title} />
                                        <div className="overlay"></div>
                                        <div className="overlay-text">
                                            <p>{project.title}</p>
                                            <Link to={`/Projects/${project.slug}`} className="view-details-btn">View Details
                                                <img src={ArrowCrossSvg} alt="arrow-cross" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="testimonials-btn fade_down">
                        <Link to="/Contact" className="btn-main btn2">Start A Project
                            <span className="arrow-section">
                                <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                            </span>
                            <div className="btn-box-left btn2"></div>
                            <div className="btn-box-right btn2"></div>
                        </Link>
                    </div>
                </div>
            </section>
            {/* <!-- =============== Section Nine ================ --> */}
            <section className="curved-section">
                <TopRated />
            </section>
            {/* <!-- ================= REPAIR & INSTALLATION =================== --> */}
            <section className="installation-section pt-0">
                <Faq />
            </section>
        </div>
    )
}

export default Projects
