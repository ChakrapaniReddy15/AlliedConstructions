import React from 'react'
import EstimateImg1 from '../assets/images/home-page/estimate-img1.jpg';
import EstimateImg2 from '../assets/images/home-page/estimate-img2.jpg';
import EstimateImg3 from '../assets/images/home-page/estimate-img3.jpg';
import ArrowCrossSvg from '../assets/images/svg/arrow-cross.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import { Link } from 'react-router-dom';
import TopRated from '../components/TopRated';
import Faq from '../components/Faq';

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
                        <p className="quality">FRIENDLY SERVICES</p>
                    </div>
                    <div className="handyman-services-textMain">
                        <h2 className="handyman-text handyman-services project-page-heading fade_down">Visit our best handyman
                            projects
                        </h2>
                        <p className="fusce malesuada tellus fade_down mt-0">Volutpat et malesuada maecenas amet. Ultrices volutpat
                            auctor euismod eget pulvinar nulla porttitor. Faucibus faucibus consectetur et tellus magnis. Nunc
                            proin mauris enim duis aliquet fringilla.
                        </p>
                    </div>
                    <div className="row project-page-row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 project-page-col">
                            <div className="img-wrapper">
                                <img src={EstimateImg2} alt="estimate-img2" />
                                <div className="overlay"></div>
                                <div className="overlay-text">
                                    <p>Fixing A Water Pipe</p>
                                    <Link to="/SingleProject" className="view-details-btn">View Details
                                        <img src={ArrowCrossSvg} alt="arrow-cross" />
                                    </Link>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                <img className="estimate-img" src={EstimateImg1} alt="estimate-img1" />
                                <div className="overlay"></div>
                                <div className="overlay-text">
                                    <p>Perfect Split AC Installation Service Work</p>
                                    <Link to="/SingleProject" className="view-details-btn">View Details
                                        <img src={ArrowCrossSvg} alt="arrow-cross" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 project-page-col">
                            <div className="img-wrapper">
                                <img className="estimate-img" src={EstimateImg1} alt="estimate-img1" />
                                <div className="overlay"></div>
                                <div className="overlay-text">
                                    <p>Perfect Split AC Installation Service Work</p>
                                    <Link to="/SingleProject" className="view-details-btn">View Details
                                        <img src={ArrowCrossSvg} alt="arrow-cross" />
                                    </Link>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                <img src={EstimateImg2} alt="estimate-img2" />
                                <div className="overlay"></div>
                                <div className="overlay-text">
                                    <p>Fixing A Water Pipe</p>
                                    <Link to="/SingleProject" className="view-details-btn">View Details
                                        <img src={ArrowCrossSvg} alt="arrow-cross" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 project-page-col">
                            <div className="img-wrapper">
                                <img src={EstimateImg3} alt="estimate-img3" />
                                <div className="overlay"></div>
                                <div className="overlay-text">
                                    <p>Quality Roofing Services</p>
                                    <Link to="/SingleProject" className="view-details-btn">View Details
                                        <img src={ArrowCrossSvg} alt="arrow-cross" />
                                    </Link>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                <img className="estimate-img" src={EstimateImg1} alt="estimate-img1" />
                                <div className="overlay"></div>
                                <div className="overlay-text">
                                    <p>Perfect Split AC Installation Service Work</p>
                                    <Link to="/SingleProject" className="view-details-btn">View Details
                                        <img src={ArrowCrossSvg} alt="arrow-cross" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-btn fade_down">
                        <Link to="#" className="btn-main btn2">Load More
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