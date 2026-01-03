import React from 'react'
import EstimateImg1 from '../assets/images/home-page/estimate-img1.jpg';
import EstimateImg2 from '../assets/images/home-page/estimate-img2.jpg';
import EstimateImg3 from '../assets/images/home-page/estimate-img3.jpg';
import ArrowCross from '../assets/images/svg/arrow-cross.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import { Link } from 'react-router-dom';

const ProjectSection = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <div className="quality-main about-qulity-main fade_down">
                            <p className="quality">get free estimate</p>
                        </div>
                        <h2 className="handyman-text fade_down">Visit our allied constructions projects</h2>
                        <p className="fusce fade_down">
                            Explore our portfolio of allied construction projects that showcase quality, innovation, and precision.
                            Each project reflects our commitment to excellence, timely execution, and sustainable building practices
                            across residential, commercial, and industrial developments.
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
                        <div className="img-group-estimate-main">
                            <div className="img-wrapper">
                                <img className="estimate-img img-animation-style1 reveal" src={EstimateImg1}
                                    alt="estimate-img1" />
                                <div className="overlay"></div>
                                <div className="overlay-text">
                                    <p>Perfect Split AC Installation Service Work</p>
                                    <Link to="/SingleProject" className="view-details-btn">View Details
                                        <img src={ArrowCross} alt="arrow-cross" />
                                    </Link>
                                </div>
                            </div>
                            <div className="img-group-estimate2">
                                <div className="img-wrapper">
                                    <img className="img-animation-style4 reveal" src={EstimateImg2} alt="estimate-img2" />
                                    <div className="overlay"></div>
                                    <div className="overlay-text">
                                        <p>Fixing A Water Pipe</p>
                                        <Link to="/SingleProject" className="view-details-btn">View Details
                                            <img src={ArrowCross} alt="arrow-cross" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="img-wrapper">
                                    <img className="img-animation-style2 reveal" src={EstimateImg3} alt="estimate-img3" />
                                    <div className="overlay"></div>
                                    <div className="overlay-text">
                                        <p>Quality Roofing Services</p>
                                        <Link to="/SingleProject" className="view-details-btn">View Details
                                            <img src={ArrowCross} alt="arrow-cross" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection