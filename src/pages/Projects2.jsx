import React from 'react'
import { Link } from 'react-router-dom'
import Project3GridImg1 from '../assets/images/project-page/project3-grid-img1.jpg';
import Project3GridImg2 from '../assets/images/project-page/project3-grid-img2.jpg';
import Project3GridImg3 from '../assets/images/project-page/project3-grid-img3.jpg';
import Project3GridImg4 from '../assets/images/project-page/project3-grid-img4.jpg';
import Project3GridImg5 from '../assets/images/project-page/project3-grid-img5.jpg';
import Project3GridImg6 from '../assets/images/project-page/project3-grid-img6.jpg';
import eyeSvg from '../assets/images/svg/eye.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import TopRated from '../components/TopRated.jsx';
import Faq from '../components/Faq.jsx';

const Project2 = () => {
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
                    <div className="row project-page-row" id="project3-page-row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-xs-1">
                            <div className="portfolio-item">
                                <div className="portfolio-img">
                                    <Link to="/SingleProject">
                                        <img src={Project3GridImg1} alt="project3-grid-img1" />
                                    </Link>
                                </div>
                                <div className="portfolio-content">
                                    <p className="p-category">
                                        <Link to="/SingleProject">Plumbing</Link>
                                    </p>
                                    <p className="p-title">
                                        <Link to="/SingleProject">Plumbing Service</Link>
                                    </p>
                                    <div className="porfolio_icon">
                                        <Link to="/SingleProject">
                                            <img src={eyeSvg} alt="eye" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-xs-1">
                            <div className="portfolio-item">
                                <div className="portfolio-img">
                                    <Link to="/SingleProject">
                                        <img src={Project3GridImg2} alt="project3-grid-img2" />
                                    </Link>
                                </div>
                                <div className="portfolio-content">
                                    <p className="p-category">
                                        <Link to="/SingleProject">Cleaning</Link>
                                    </p>
                                    <p className="p-title">
                                        <Link to="/SingleProject">Cleaning Service</Link>
                                    </p>
                                    <div className="porfolio_icon">
                                        <Link to="/SingleProject">
                                            <img src={eyeSvg} alt="eye" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-xs-1">
                            <div className="portfolio-item">
                                <div className="portfolio-img">
                                    <Link to="/SingleProject">
                                        <img src={Project3GridImg3} alt="project3-grid-img3" />
                                    </Link>
                                </div>
                                <div className="portfolio-content">
                                    <p className="p-category">
                                        <Link to="/SingleProject">Solar</Link>
                                    </p>
                                    <p className="p-title">
                                        <Link to="/SingleProject">Solar Service</Link>
                                    </p>
                                    <div className="porfolio_icon">
                                        <Link to="/SingleProject">
                                            <img src={eyeSvg} alt="eye" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-xs-1">
                            <div className="portfolio-item">
                                <div className="portfolio-img">
                                    <Link to="/SingleProject">
                                        <img src={Project3GridImg4} alt="project3-grid-img4" />
                                    </Link>
                                </div>
                                <div className="portfolio-content">
                                    <p className="p-category">
                                        <Link to="/SingleProject">Welding</Link>
                                    </p>
                                    <p className="p-title">
                                        <Link to="/SingleProject">Welding Service</Link>
                                    </p>
                                    <div className="porfolio_icon">
                                        <Link to="/SingleProject">
                                            <img src={eyeSvg} alt="eye" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-xs-1">
                            <div className="portfolio-item">
                                <div className="portfolio-img">
                                    <Link to="/SingleProject">
                                        <img src={Project3GridImg5} alt="project3-grid-img5" />
                                    </Link>
                                </div>
                                <div className="portfolio-content">
                                    <p className="p-category">
                                        <Link to="/SingleProject">Electrical</Link>
                                    </p>
                                    <p className="p-title">
                                        <Link to="/SingleProject">Electrical Service</Link>
                                    </p>
                                    <div className="porfolio_icon">
                                        <Link to="/SingleProject">
                                            <img src={eyeSvg} alt="eye" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-xs-1">
                            <div className="portfolio-item">
                                <div className="portfolio-img">
                                    <Link to="/SingleProject">
                                        <img src={Project3GridImg6} alt="project3-grid-img6" />
                                    </Link>
                                </div>
                                <div className="portfolio-content">
                                    <p className="p-category">
                                        <Link to="/SingleProject">Air Condition</Link>
                                    </p>
                                    <p className="p-title">
                                        <Link to="/SingleProject">Air Condition Service</Link>
                                    </p>
                                    <div className="porfolio_icon">
                                        <Link to="/SingleProject">
                                            <img src={eyeSvg} alt="eye" />
                                        </Link>
                                    </div>
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

export default Project2



