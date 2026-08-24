import React from 'react'
import ArrowCross from '../assets/images/svg/arrow-cross.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../features/projects/projectData.js';

const ProjectSection = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <div className="quality-main about-qulity-main fade_down">
                            <p className="quality">construction portfolio</p>
                        </div>
                        <h2 className="alliedconstruction-text fade_down">Explore Allied Construction project work</h2>
                        <p className="fusce fade_down">
                            See our work across homes, offices, remodels, terrace improvements, and completed building projects.
                            Each project shows clear planning, careful site work, good finishing, and spaces that are easy to use.
                        </p>

                        <div className="Submit seemore-btn-main">
                            <Link to="/Projects" className="btn-main btn2">See More
                                <span className="arrow-section">
                                    <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                </span>
                                <div className="btn-box-left btn2"></div>
                                <div className="btn-box-right btn2"></div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <div className="project-home-grid">
                            {featuredProjects.map((project) => (
                                <div className="img-wrapper project-home-card" key={project.slug}>
                                    <img className="project-home-img" src={project.image} alt={project.title} />
                                    <div className="overlay"></div>
                                    <div className="overlay-text project-home-overlay-text">
                                        <span>{project.category}</span>
                                        <p>{project.title}</p>
                                        <Link to={`/Projects/${project.slug}`} className="view-details-btn">View Details
                                            <img src={ArrowCross} alt="arrow-cross" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection
