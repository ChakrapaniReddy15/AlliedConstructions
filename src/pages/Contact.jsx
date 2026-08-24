import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeadphoneWhite from '../assets/images/svg/headphone-white.svg';
import EmailWhite from '../assets/images/svg/email-White.svg';
import LoactionWhite from '../assets/images/svg/loaction-white.svg';
import facebookSvg from '../assets/images/svg/facebook.svg';
import InstaSvg from '../assets/images/svg/insta.svg';
import LinkdienSvg from '../assets/images/svg/linkdien.svg';
import RightArrowSvg from "../assets/images/svg/right-arrow-svg.svg";
import Faq from '../components/Faq.jsx';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const subject = `Allied Construction Enquiry from ${formData.name}`;
        const body = [
            `Name: ${formData.name}`,
            `Phone: ${formData.phone}`,
            `Email: ${formData.email}`,
            '',
            `Message: ${formData.message}`,
        ].join('\n');

        window.location.href = `mailto:alliedconstructionshyd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

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
                        <h2 className="alliedconstruction-text alliedconstruction-services project-page-heading fade_down">Reach Out & Connect
                        </h2>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="fusce malesuada tellus fade_down mt-0">Talk to Allied Construction about painting, solar, renovation, waterproofing, and complete construction requirements in Hyderabad.
                            </p>
                            <div className="contact-head-main">
                                <div className="head-phone-white-main contact-deatils-head">
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
                                <div className="head-phone-white-main contact-deatils-head">
                                    <div className="headphone-white">
                                        <img src={EmailWhite} alt="email-White" />
                                    </div>
                                    <div>
                                        <p className="CallUs">Email Us</p>
                                        <Link to="mailto:alliedconstructionshyd@gmail.com" className="CallUs-phone">
                                            <p>alliedconstructionshyd@gmail.com</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="head-phone-white-main contact-deatils-head">
                                    <div className="headphone-white">
                                        <img src={LoactionWhite} alt="loaction-white" />
                                    </div>
                                    <div>
                                        <p className="CallUs">Find Us</p>
                                        <p className="CallUs-phone">Hyderabad, Telangana</p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-media-icon-main-head" id="conat-media-icon-main-head">
                                <a href="https://www.facebook.com/profile.php?id=61585741507466#" target="_blank" rel="noreferrer">
                                    <div className="home-media-icon-main">
                                        <img src={facebookSvg} alt="home-fb-icon" />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/allied_constructions_hyd/" target="_blank" rel="noreferrer">
                                    <div className="home-media-icon-main">
                                        <img src={InstaSvg} alt="home-insta-icon" />
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/allied-construction-hyd-78bbb03a3/" target="_blank" rel="noreferrer">
                                    <div className="home-media-icon-main">
                                        <img src={LinkdienSvg} alt="home-be-icon" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <form className="search-box-main" id="contact-page-form" onSubmit={handleSubmit}>
                                <div className="search-input">
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name*" required />
                                </div>
                                <div className="search-input">
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number*" required />
                                </div>
                                <div className="search-input">
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email*" required />
                                </div>
                                <div className="search-input">
                                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message Here..." required></textarea>
                                </div>
                                <div className="Submit mb-0">
                                    <button type="submit" className="btn-main btn2">Contact Us
                                        <span className="arrow-section">
                                            <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                        </span>
                                        <div className="btn-box-left btn2"></div>
                                        <div className="btn-box-right btn2"></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="map-section">
                <h2 className="d-none">hidden</h2>
                <div className="curved-section">
                    <iframe className="map-iframe"
                        src="https://www.google.com/maps?q=Hyderabad%2C%20Telangana&output=embed"
                        title="Allied Construction Hyderabad location"
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
