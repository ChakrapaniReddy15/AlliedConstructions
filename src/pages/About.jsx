import React from 'react'
import AboutSecImg4 from '../assets/images/about-page/about-sec-img4.jpg';
import AboutSecImg5 from '../assets/images/about-page/about-sec-img5.jpg';
import AboutSecImg6 from '../assets/images/about-page/about-sec-img6.jpg';
import AboutSecSvg1 from '../assets/images/svg/about-sec-svg1.svg';
import AboutSecSvg2 from '../assets/images/svg/about-sec-svg2.svg';
import AboutSecSvg3 from '../assets/images/svg/about-sec-svg3.svg';
import AboutSecSvg4 from '../assets/images/svg/about-sec-svg4.svg';
import HeadphoneSvg from '../assets/images/svg/headphone.svg';
import AboutImage27 from '../assets/images/about-page/image27.jpg';
import AboutImage28 from '../assets/images/about-page/image28.jpg';
import AboutImage29 from '../assets/images/about-page/image29.jpg';
import ArrowImg from '../assets/images/about-page/arrow-img.png';
import TeamImg1 from '../assets/images/team-page/team-img1.jpg';
import TeamImg2 from '../assets/images/team-page/team-img2.jpg';
import TeamImg3 from '../assets/images/team-page/team-img3.jpg';
import TeamImg4 from '../assets/images/team-page/team-img4.jpg';
import calendarSvg from '../assets/images/svg/calendar.svg';
import OurProcess from '../components/OurProcess.jsx';
import TopRated from '../components/TopRated.jsx';
import TeamSocialMedia from '../components/TeamSocialMedia.jsx';
import { Link } from 'react-router-dom';
import Faq from '../components/Faq.jsx';

const About = () => {
    return (
        <>

            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="about-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">About Us</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/About"> ABOUT US</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Two ===================================== --> */}
            <section className="section-two">
                <div className="container">
                    <div className="quality-main about-qulity-main fade_down">
                        <p className="quality">allied construction support</p>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <h2 className="alliedconstruction-text fade_down">Construction and renovation services for homes and businesses</h2>
                            <div className="about-sec-img-main">
                                <img className="about-sec-img1 img-animation-style1 reveal" id="about-sec-img1"
                                    src={AboutSecImg4} alt="about-sec-img4" />
                                <div className="contact-box" id="contact-box">
                                    <div className="headphone-icon">
                                        <img src={HeadphoneSvg} alt="headphone" />
                                    </div>
                                    <div className="call-info-book">
                                        <p>Call For Booking</p>
                                            <a href="tel:+919347111242">+91-9347111242</a>
                                    </div>
                                </div>
                                <img className="about-sec-img2 img-animation-style2 reveal"
                                    src={AboutSecImg5} alt="about-sec-img5" />
                                <img className="about-sec-img3 img-animation-style6 reveal"
                                    src={AboutSecImg6} alt="about-sec-img6" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="fusce fade_down">Allied Constructions brings planning, site execution, finishing, and
                                service coordination together for residential and commercial spaces. We focus on dependable
                                workmanship, clear communication, and practical delivery.
                            </p>
                            <div className="row highQulity-box-row2 highQulity-box-row overflow-hidden">
                                <div className="col-xxl-12 p-0">
                                    <div className="highQulity-box fade_right">
                                        <div className="qulity-work-grp">
                                            <img src={AboutSecSvg1} alt="about-sec-svg1" />
                                            <p className="highQulity">High Quality Work</p>
                                        </div>
                                        <p className="semper">We follow proven construction practices and keep quality checks active through each project stage.</p>
                                    </div>
                                    <div className="highQulity-box highQulity-box2 fade_right">
                                        <div className="qulity-work-grp">
                                            <img src={AboutSecSvg3} alt="about-sec-svg1" />
                                            <p className="highQulity">Customized Solution</p>
                                        </div>
                                        <p className="semper">Every plan is shaped around your site, budget, timeline, and daily-use requirements.</p>
                                    </div>
                                </div>
                                <div className="col-xxl-12 p-0">
                                    <div className="highQulity-box fade_left">
                                        <div className="qulity-work-grp">
                                            <img src={AboutSecSvg2} alt="about-sec-svg2" />
                                            <p className="highQulity">Smart Execution System</p>
                                        </div>
                                        <p className="semper">We coordinate civil, electrical, plumbing, carpentry, painting, and finishing work with less rework.</p>
                                    </div>
                                    <div className="highQulity-box highQulity-box2 fade_left">
                                        <div className="qulity-work-grp">
                                            <img src={AboutSecSvg4} alt="about-sec-svg1" />
                                            <p className="highQulity">Affordable Pricing</p>
                                        </div>
                                        <p className="semper">Clear estimates and practical material choices help keep the project aligned with your goals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Five ===================================== --> */}
            <OurProcess />
            {/* <!-- ====================================== Section Six ===================================== --> */}
            <section className="section-six pb-0">
                <div className="container">
                    <div className="row img-group-about-pageRow">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <img className="image27 img-animation-style4 reveal" src={AboutImage27} alt="image27" />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 img-group-about-page">
                            <img className="image28 img-animation-style2 reveal" src={AboutImage28} alt="image28" />
                            <img className="image29 img-animation-style4 reveal" src={AboutImage29} alt="image29" />
                        </div>
                    </div>
                    <h3 className="tackle">We are your trusted Allied Construction team for new construction, renovations,
                        repairs, and finishing work. Our skilled professionals coordinate the details so your project moves
                        cleanly from site planning to handover.</h3>
                    <div className="row  whatWeRow">
                        <div className="col-xxl-6 col-xl-6 col-lg-5 whatWe">
                            <h3>What We Do</h3>
                            <img src={ArrowImg} alt="arrow-img" />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-7 services-box-about-page">
                            <ul>
                                <li><Link to="/PlumbingService">Plumbing Service</Link></li>
                                <li><Link to="/RoofingService">Roofing Service</Link></li>
                                <li><Link to="/CarpentryService">Carpentry Service</Link></li>
                                <li><Link to="/CleaningService">Cleaning Service</Link></li>
                                <li><Link to="/PaintingService">Painting Service</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="/ElectricalService">Electrical Service</Link></li>
                                <li><Link to="/AirConditionService">Air Condition Service</Link></li>
                                <li><Link to="/SolarService">Solar Service</Link></li>
                                <li><Link to="/WeldingService">Welding Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight" >
                <div className="container">
                    <div className="quality-main ourProcess fade_down">
                        <p className="quality">our teams</p>
                    </div>
                    <h2 className="alliedconstruction-text legal fade_down">Experienced construction team</h2>
                    <p className="fusce elementum fade_down">Our team combines site supervision, trade coordination, and finishing
                        experience to deliver reliable construction outcomes.
                    </p>
                    <div className="row ourTeam-Row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg1} alt="team-img1" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Kevin Martin</h2>
                                        <p>Site Supervisor</p>
                                    </div>
                                </Link>
                                <TeamSocialMedia />
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg2} alt="team-img2" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Richard Smith</h2>
                                        <p>Electrical Lead</p>
                                    </div>
                                </Link>
                                <TeamSocialMedia />
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg3} alt="team-img3" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Max Walker</h2>
                                        <p>Finishing Specialist</p>
                                    </div>
                                </Link>
                                <TeamSocialMedia />
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg4} alt="team-img4" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Melena Marshall</h2>
                                        <p>Project Coordinator</p>
                                    </div>
                                </Link>
                                <TeamSocialMedia />
                            </div>
                        </div>
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
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="curved-section">
                <TopRated />
            </section>
            {/* <!-- ====================================== Section REPAIR & INSTALLATION ===================================== --> */}
            <section className="installation-section exatra-class">
                <Faq />
            </section>
        </>
    )
}

export default About
