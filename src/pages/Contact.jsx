import React from 'react'
import { Link } from 'react-router-dom'
import HeadphoneWhite from '../assets/images/svg/headphone-white.svg';
import EmailWhite from '../assets/images/svg/email-White.svg';
import LoactionWhite from '../assets/images/svg/loaction-white.svg';
import facebookSvg from '../assets/images/svg/facebook.svg';
import TwiiterSvg from '../assets/images/svg/twiiter.svg';
import InstaSvg from '../assets/images/svg/insta.svg';
import LinkdienSvg from '../assets/images/svg/linkdien.svg';
import RightArrowSvg from "../assets/images/svg/right-arrow-svg.svg";
import Faq from '../components/Faq.jsx';

const Contact = () => {
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one" >
                <div className="page-img-header" id="conatct-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Contact Us</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* < !-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row">
                        <div className="quality-main about-qulity-main fade_down">
                            <p className="quality">CONTACT OUR EXPERTS</p>
                        </div>
                        <h2 className="handyman-text handyman-services project-page-heading fade_down">Reach Out & Connect
                        </h2>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="fusce malesuada tellus fade_down mt-0">Volutpat et malesuada maecenas amet. Ultrices
                                volutpat auctor euismod eget pulvinar nulla porttitor.
                            </p>
                            <div className="contact-head-main">
                                <div className="head-phone-white-main contact-deatils-head">
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
                                <div className="head-phone-white-main contact-deatils-head">
                                    <div className="headphone-white">
                                        <img src={EmailWhite} alt="email-White" />
                                    </div>
                                    <div>
                                        <p className="CallUs">Email Us</p>
                                        <Link to="mailto:contact@home.rakshak.com" className="CallUs-phone">
                                            <p>contact@home.rakshak.com</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="head-phone-white-main contact-deatils-head">
                                    <div className="headphone-white">
                                        <img src={LoactionWhite} alt="loaction-white" />
                                    </div>
                                    <div>
                                        <p className="CallUs">Find Us</p>
                                        <p className="CallUs-phone">2972 Westheimer 96 Rd. Mexico</p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-media-icon-main-head" id="conat-media-icon-main-head">
                                <a href="https://www.facebook.com">
                                    <div className="home-media-icon-main">
                                        <img src={facebookSvg} alt="home-fb-icon" />
                                    </div>
                                </a>
                                <a href="https://x.com">
                                    <div className="home-media-icon-main">
                                        <img src={TwiiterSvg} alt="home-tw-icon" />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com">
                                    <div className="home-media-icon-main">
                                        <img src={InstaSvg} alt="home-insta-icon" />
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com">
                                    <div className="home-media-icon-main">
                                        <img src={LinkdienSvg} alt="home-be-icon" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="search-box-main" id="contact-page-form">
                                <div className="search-input">
                                    <input type="text" placeholder="Your Name*" />
                                </div>
                                <div className="search-input">
                                    <input type="text" placeholder="Your Phone Number*" />
                                </div>
                                <div className="search-input">
                                    <input type="email" placeholder="Your Email*" />
                                </div>
                                <div className="search-input">
                                    <textarea placeholder="Message Here..."></textarea>
                                </div>
                                <div className="Submit mb-0">
                                    <Link to="#" className="btn-main btn2">Contact Us
                                        <span className="arrow-section">
                                            <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                        </span>
                                        <div className="btn-box-left btn2"></div>
                                        <div className="btn-box-right btn2"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="map-section">
                <h2 className="d-none">hidden</h2>
                <div className="curved-section">
                    <iframe className="map-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11661.278162829134!2d-76.16113884753138!3d43.0557465765357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3add89232d3%3A0x516c4febad79a023!2sNear%20Northeast%2C%20Syracuse%2C%20NY%2013203%2C%20USA!5e0!3m2!1sen!2sin!4v1704092010021!5m2!1sen!2sin"
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>
            {/* <!-- ================= REPAIR & INSTALLATION =================== --> */}
            <section className="installation-section exatra-class">
                <Faq />
            </section>
        </div>
    )
}

export default Contact

