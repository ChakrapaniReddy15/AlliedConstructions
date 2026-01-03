import React from 'react'
import PartsImg from '../assets/images/home-page/parts-img.png';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import FooterLogoSvg from '../assets/images/svg/footer-logo.svg';
import HeadphoneWhite from '../assets/images/svg/headphone-white.svg';
import emailWhite from '../assets/images/svg/email-White.svg';
import loactionWhite from '../assets/images/svg/loaction-white.svg';
import FacebookImg from '../assets/images/svg/facebook.svg';
import TwiiterImg from '../assets/images/svg/twiiter.svg';
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
                        <h3 className="need">Need to schedule your first service?</h3>
                        <p className="egestas">
                            Get started with a hassle-free service experience tailored to your schedule and needs.
                        </p>
                    </div>
                    <Link to="/Contact" className="btn-main btn1 bookNowSchedul">Book Now
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
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <Link to="/">
                                <img src={FooterLogoSvg} alt="footer-logo" />
                            </Link>
                            <p className="morbi">Feugiat cursus et morbi sit nunc varius. Tristique pharetra tortor ultrices
                                accumsan egestas ullamcorper varius quam sit velit donec eu.</p>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <h2 className="useful-link-text">Useful Links</h2>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="usefulLinks-List">
                                        <li><Link to="/About">About Us</Link></li>
                                        <li><Link to="/Services">Services</Link></li>
                                        <li><Link to="/Projects">Portfolio</Link></li>
                                        <li><Link to="/OurBlog">Blog</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="usefulLinks-List">
                                        <li><Link to="/Contact">Contact Us</Link></li>
                                        <li><Link to="/FaqPage">FAQs</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">T & C</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
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
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <h2 className="useful-link-text">Contact Us</h2>
                            <div className="head-phone-white-main">
                                <div className="headphone-white">
                                    <img src={HeadphoneWhite} alt="headphone-white" />
                                </div>
                                <div>
                                    <p className="CallUs">Call Us</p>
                                    <Link to="tel:+1(248)3578866" className="CallUs-phone">
                                        <p>+1 (248) 357 8866</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="head-phone-white-main">
                                <div className="headphone-white">
                                    <img src={emailWhite} alt="email-White" />
                                </div>
                                <div>
                                    <p className="CallUs">Email Us</p>
                                    <Link to="mailto:contact@home.rakshak.com" className="CallUs-phone">
                                        <p>contact@home.rakshak.com</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="head-phone-white-main">
                                <div className="headphone-white">
                                    <img src={loactionWhite} alt="loaction-white" />
                                </div>
                                <div>
                                    <p className="CallUs">Find Us</p>
                                    <p className="CallUs-phone">2972 Westheimer 96 Rd. Mexico</p>
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
                            <a href="https://1.envato.market/website-portfolio" target="_blank" rel="noreferrer"> The_Krishna.</a>
                        </h2>
                        <div className="home-media-icon-main-head">
                            <a href="https://www.facebook.com">
                                <div className="home-media-icon-main">
                                    <img src={FacebookImg} alt="home-fb-icon" />
                                </div>
                            </a>
                            <a href="https://x.com">
                                <div className="home-media-icon-main">
                                    <img src={TwiiterImg} alt="home-tw-icon" />
                                </div>
                            </a>
                            <a href="https://www.instagram.com">
                                <div className="home-media-icon-main">
                                    <img src={InstaImg} alt="home-insta-icon" />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com">
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