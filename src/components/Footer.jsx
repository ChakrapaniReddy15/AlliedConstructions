import React from 'react'
import PartsImg from '../assets/images/home-page/parts-img.png';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import AlliedLogo from '../assets/images/svg/Allied-Construction-Logo.svg';
import HeadphoneWhite from '../assets/images/svg/headphone-white.svg';
import emailWhite from '../assets/images/svg/email-White.svg';
import loactionWhite from '../assets/images/svg/loaction-white.svg';
import FacebookImg from '../assets/images/svg/facebook.svg';
import InstaImg from '../assets/images/svg/insta.svg';
import LinkdienImg from '../assets/images/svg/linkdien.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            {/* <!-- ==================== Section schedule service ============== --> */}
            <section className="ScheduleService">
                <div className="container ScheduleService-main">
                    <img className="parts-img" src={PartsImg} alt="parts-img" />
                    <div>
                        <h3 className="need">Planning your next construction project?</h3>
                        <p className="egestas">
                            Talk to Allied Constructions about building work, renovation, interiors, or complete project work.
                        </p>
                    </div>
                    <Link to="/Contact" className="btn-main btn1 bookNowSchedul">Contact Us
                        <span className="arrow-section">
                            <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                        </span>
                        <div className="btn-box-left btn1"></div>
                        <div className="btn-box-right btn1"></div>
                    </Link>
                </div>
            </section>
            {/* <!-- ==================== Footer =================== --> */}
            <footer>
                <div className="container">
                    <div className="row footer-row">
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 footer-col footer-brand-col">
                            <Link to="/">
                                <img className="footer-brand-logo" src={AlliedLogo} alt="Allied Constructions" />
                            </Link>
                            <p className="morbi">Allied Constructions delivers reliable construction, renovation, interiors,
                                and project work with clear planning, quality workmanship, and a clean finish.</p>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 footer-col">
                            <h2 className="useful-link-text">Useful Links</h2>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="usefulLinks-List">
                                        <li><Link to="/About">About Us</Link></li>
                                        <li><Link to="/Services">Services</Link></li>
                                        <li><Link to="/Projects">Projects</Link></li>
                                        <li><Link to="/Team">Team</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="usefulLinks-List">
                                        <li><Link to="/Contact">Contact Us</Link></li>
                                        <li><Link to="/FaqPage">FAQs</Link></li>
                                        <li><Link to="/Testimonials">Testimonials</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 footer-col">
                            <h2 className="useful-link-text">Our Services</h2>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="usefulLinks-List">
                                        <li><Link to="/PlumbingService">Plumbing</Link></li>
                                        <li><Link to="/RoofingService">Roofing</Link></li>
                                        <li><Link to="/CarpentryService">Carpentry</Link></li>
                                        <li><Link to="/CleaningService">Cleaning</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="usefulLinks-List">
                                        <li><Link to="/ElectricalService">Electrical</Link></li>
                                        <li><Link to="/AirConditionService">Air Condition</Link></li>
                                        <li><Link to="/SolarService">Solar</Link></li>
                                        <li><Link to="/WeldingService">Welding</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 footer-col">
                            <h2 className="useful-link-text">Contact Us</h2>
                            <div className="head-phone-white-main">
                                <div className="headphone-white">
                                    <img src={HeadphoneWhite} alt="headphone-white" />
                                </div>
                                <div>
                                    <p className="CallUs">Call Us</p>
                                    <Link to="tel:+919347111242" className="CallUs-phone">
                                        <p>+91-9347111242</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="head-phone-white-main">
                                <div className="headphone-white">
                                    <img src={emailWhite} alt="email-White" />
                                </div>
                                <div>
                                    <p className="CallUs">Email Us</p>
                                    <Link to="mailto:alliedconstructionshyd@gmail.com" className="CallUs-phone">
                                        <p>alliedconstructionshyd@gmail.com</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="head-phone-white-main">
                                <div className="headphone-white">
                                    <img src={loactionWhite} alt="loaction-white" />
                                </div>
                                <div>
                                    <p className="CallUs">Find Us</p>
                                    <p className="CallUs-phone">Hyderabad, Telangana</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- =========================== Copyright ======================= --> */}
            <div className="copyright-main">
                <div className="container">
                    <div className="rights-reserved">
                        <h2>Copyright © {new Date().getFullYear()}. All rights reserved by
                            <a href="https://piesopic.com" target="_blank" rel="noreferrer"> piesopic.</a>
                        </h2>
                        <div className="home-media-icon-main-head">
                            <a href="https://www.facebook.com/profile.php?id=61585741507466#" target="_blank" rel="noopener noreferrer">
                                <div className="home-media-icon-main">
                                    <img src={FacebookImg} alt="home-fb-icon" />
                                </div>
                            </a>
                            <a href="https://www.instagram.com/allied_constructions_hyd/" target="_blank" rel="noopener noreferrer">
                                <div className="home-media-icon-main">
                                    <img src={InstaImg} alt="home-insta-icon" />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/allied-construction-hyd-78bbb03a3/" target="_blank" rel="noopener noreferrer">
                                <div className="home-media-icon-main">
                                    <img src={LinkdienImg} alt="home-be-icon" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
