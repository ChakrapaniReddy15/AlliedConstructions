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
                        <p className="quality">construction projects</p>
                    </div>
                    <div className="alliedconstruction-services-textMain">
                        <h2 className="alliedconstruction-text alliedconstruction-services project-page-heading fade_down">Allied Construction
                            project portfolio
                        </h2>
                        <p className="fusce malesuada tellus fade_down mt-0">Explore selected construction projects across
                            homes, offices, remodels, terrace improvements, and completed building work. Each project shows
                            clear planning, careful site work, quality checks, and a clean finish.
                        </p>
                    </div>
                    <div className="project-page-row">
                        {projects.map((project) => (
                            <div className="img-wrapper project-page-card" key={project.slug}>
                                <img className="project-page-img" src={project.image} alt={project.title} />
                                <div className="overlay"></div>
                                <div className="overlay-text project-page-overlay-text">
                                    <span>{project.category}</span>
                                    <p>{project.title}</p>
                                    <small>{project.location}</small>
                                    <Link to={`/Projects/${project.slug}`} className="view-details-btn">View Details
                                        <img src={ArrowCrossSvg} alt="arrow-cross" />
                                    </Link>
                                </div>
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
