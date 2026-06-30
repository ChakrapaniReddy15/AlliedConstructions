import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import AboutSecImg1 from '../assets/images/about-page/about-sec-img1.jpg';
import AboutSecImg2 from '../assets/images/about-page/about-sec-img2.jpg';
import AboutSecImg3 from '../assets/images/about-page/about-sec-img3.jpg';
import AboutSecSvg1 from '../assets/images/svg/about-sec-svg1.svg';
import AboutSecSvg2 from '../assets/images/svg/about-sec-svg2.svg';
import AboutSecSvg3 from '../assets/images/svg/about-sec-svg3.svg';
import AboutSecSvg4 from '../assets/images/svg/about-sec-svg4.svg';
import HeadphoneSvg from '../assets/images/svg/headphone.svg';
import calendarSvg from '../assets/images/svg/calendar.svg';
import TeamImg1 from '../assets/images/team-page/team-img1.jpg';
import TeamImg2 from '../assets/images/team-page/team-img2.jpg';
import TeamImg3 from '../assets/images/team-page/team-img3.jpg';
import TeamImg4 from '../assets/images/team-page/team-img4.jpg';
import TopRated from '../components/TopRated.jsx';
import Faq from '../components/Faq.jsx';
import TeamSocialMedia from '../components/TeamSocialMedia.jsx';
import OurProcess from "../components/OurProcess.jsx";
import ProjectSection from "../components/ProjectSection.jsx";
import FreeContact from "../components/FreeContact.jsx";
import HeroVideo from "../components/HeroVideo.jsx";
import { services } from '../data/serviceData.js';

const iconFilter = {
    filter: 'brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(7488%) hue-rotate(357deg) brightness(91%) contrast(91%)'
};

const Home = () => {
    return (
        <>
            <section className="section-one">
                <HeroVideo />
            </section>
            <section className="section-two">
                <div className="container">
                    <div className="quality-main about-qulity-main fade_down">
                        <p className="quality">about Allied Constructions</p>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <h2 className="alliedconstruction-text fade_down">A company built to deliver dependable construction solutions</h2>
                            <div className="about-sec-img-main">
                                <img className="about-sec-img1 img-animation-style1 reveal" src={AboutSecImg1} alt="construction planning" />
                                <img className="about-sec-img2 img-animation-style2 reveal" src={AboutSecImg2} alt="construction work" />
                                <img className="about-sec-img3 img-animation-style6 reveal" src={AboutSecImg3} alt="finished interior" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="fusce fade_down">
                                Allied Constructions handles construction, renovation, and finishing work with a focus on
                                quality, clear updates, and clean completion. From first plan to final work, we help turn
                                ideas into strong and useful spaces.
                            </p>
                            <div className="row highQulity-box-row overflow-hidden">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="highQulity-box fade_right">
                                        <img src={AboutSecSvg1} style={iconFilter} alt="quality" />
                                        <p className="highQulity">Superior Build Quality</p>
                                        <p className="semper">We use proven methods and quality materials to support durable construction.</p>
                                    </div>
                                    <div className="highQulity-box highQulity-box2 fade_right">
                                        <img src={AboutSecSvg3} style={iconFilter} alt="design" />
                                        <p className="highQulity">Tailored Design Solutions</p>
                                        <p className="semper">Every project is planned around the space, budget, and intended use.</p>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="highQulity-box fade_left">
                                        <img src={AboutSecSvg2} style={iconFilter} alt="project work" />
                                        <p className="highQulity">Project Work</p>
                                        <p className="semper">Our team keeps planning, site work, and final finishing clear.</p>
                                    </div>
                                    <div className="highQulity-box highQulity-box2 fade_left">
                                        <img src={AboutSecSvg4} style={iconFilter} alt="pricing" />
                                        <p className="highQulity">Transparent Pricing</p>
                                        <p className="semper">We provide clear estimates and help avoid unwanted surprises.</p>
                                    </div>
                                </div>
                                <p className="semper blandit">
                                    With a strong foundation in construction and interiors, Allied Constructions balances quality,
                                    functionality, and long-term value in every project.
                                </p>
                                <div className="about-sec-contact-main">
                                    <Link to="/About" className="btn-main btn2">Read More
                                        <span className="arrow-section">
                                            <img className="arrow" src={RightArrowSvg} alt="right arrow" />
                                        </span>
                                        <div className="btn-box-left btn2"></div>
                                        <div className="btn-box-right btn2"></div>
                                    </Link>
                                    <div className="contact-box">
                                        <div className="headphone-icon">
                                            <img src={HeadphoneSvg} style={iconFilter} alt="phone" />
                                        </div>
                                        <div className="call-info-book">
                                            <p>Call For Booking</p>
                                            <Link to="tel:+919347111242">+91-9347111242</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-three">
                <div className="container">
                    <div className="quality-main about-qulity-main fade_down">
                        <p className="quality">our services</p>
                    </div>
                    <div className="alliedconstruction-services-textMain">
                        <h2 className="alliedconstruction-text alliedconstruction-services fade_down">Complete Allied Construction services for your property</h2>
                        <p className="fusce malesuada fade_down mt-0">
                            From planning and construction to repairs and finishing, our team helps keep your space strong,
                            useful, and ready for daily use.
                        </p>
                    </div>
                    <div className="services_slider">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={3}
                            loop={true}
                            speed={1200}
                            autoplay={{ delay: 1500, disableOnInteraction: false }}
                            breakpoints={{
                                1199: { slidesPerView: 3 },
                                767: { slidesPerView: 2 },
                                0: { slidesPerView: 1 },
                            }}>
                            {services.map((service) => (
                                <SwiperSlide key={service.key}>
                                    <Link to={service.route}>
                                        <div className="services-slider-box">
                                            <img className="services-icon" src={service.images.home} alt={service.title} />
                                            <div className="services-icon-box">
                                                <img className="plumbing" src={service.icon} alt={service.key} />
                                                <h2 className="services-solution-main-text">{service.title}</h2>
                                                <p className="aliquam-text">{service.summary}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            <div className="View-btn-sec">
                <div className="container">
                    <div className="View-btn-sec-btn-main">
                        <Link to="/Services" className="btn-main btn2">View All Services
                            <span className="arrow-section">
                                <img className="arrow" src={RightArrowSvg} alt="right arrow" />
                            </span>
                            <div className="btn-box-left btn2"></div>
                            <div className="btn-box-right btn2"></div>
                        </Link>
                    </div>
                </div>
            </div>
            <OurProcess />
            <section className="section-six">
                <ProjectSection />
            </section>
            <section className="section-seven">
                <FreeContact />
            </section>
            <section className="section-eight">
                <div className="container">
                    <div className="quality-main ourProcess fade_down">
                        <p className="quality">our teams</p>
                    </div>
                    <h2 className="alliedconstruction-text legal fade_down">Experienced construction team</h2>
                    <p className="fusce elementum fade_down">
                        Our team brings site experience, technical knowledge, and finishing care together so every project
                        moves clearly from planning to completion.
                    </p>
                    <div className="row ourTeam-Row">
                        {[
                            [TeamImg1, 'Kevin Martin', 'Site Supervisor'],
                            [TeamImg2, 'Richard Smith', 'Electrical Lead'],
                            [TeamImg3, 'Max Walker', 'Finishing Specialist'],
                            [TeamImg4, 'Melena Marshall', 'Project Coordinator'],
                        ].map(([image, name, role]) => (
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col" key={name}>
                                <div className="team-img-container">
                                    <img className="team-img" src={image} alt={name} />
                                    <Link to="/SingleTeam">
                                        <div className="team-mem-details">
                                            <h2>{name}</h2>
                                            <p>{role}</p>
                                        </div>
                                    </Link>
                                    <TeamSocialMedia />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="Appointment-box fade_down">
                        <div className="container Appointment-box-sub">
                            <Link to="/Contact" className="diamond-btn calendar-btn">
                                <img src={calendarSvg} alt="calendar" />
                            </Link>
                            <h3>Our expert will be available <span>Mon - Fri (9 Am - 6 Pm)</span> to discuss your project.</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="curved-section">
                <TopRated />
            </section>
            <section className="installation-section">
                <Faq />
            </section>
        </>
    );
};

export default Home;
