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
                        <p className="quality">24/7 HASSLE-FREE</p>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <h2 className="handyman-text fade_down">Home and Businesses Installation Services</h2>
                            <div className="about-sec-img-main">
                                <img className="about-sec-img1 img-animation-style1 reveal" id="about-sec-img1"
                                    src={AboutSecImg4} alt="about-sec-img4" />
                                <div className="contact-box" id="contact-box">
                                    <div className="headphone-icon">
                                        <img src={HeadphoneSvg} alt="headphone" />
                                    </div>
                                    <div className="call-info-book">
                                        <p>Call For Booking</p>
                                        <a href="tel:+12483578866">+1 (248) 357 8866</a>
                                    </div>
                                </div>
                                <img className="about-sec-img2 img-animation-style2 reveal"
                                    src={AboutSecImg5} alt="about-sec-img5" />
                                <img className="about-sec-img3 img-animation-style6 reveal"
                                    src={AboutSecImg6} alt="about-sec-img6" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="fusce fade_down">Dignissim fusce eget magna non feugiat id at rhoncus. Morbi cras varius
                                pellentesque faucibus consectetur amet nulla sit. Nulla dolor adipiscing mi massa pellentesque
                                tempor vestibulum augue facilisis.
                            </p>
                            <div className="row highQulity-box-row2 highQulity-box-row overflow-hidden">
                                <div className="col-xxl-12 p-0">
                                    <div className="highQulity-box fade_right">
                                        <div className="qulity-work-grp">
                                            <img src={AboutSecSvg1} alt="about-sec-svg1" />
                                            <p className="highQulity">High Quality Work</p>
                                        </div>
                                        <p className="semper">Consectetur scelerisque imperdiet turpis proin fames non egestas
                                            egestas ut. Tincidunt amet amet urna auctor tortor id ante augue.</p>
                                    </div>
                                    <div className="highQulity-box highQulity-box2 fade_right">
                                        <div className="qulity-work-grp">
                                            <img src={AboutSecSvg3} alt="about-sec-svg1" />
                                            <p className="highQulity">Customized Solution</p>
                                        </div>
                                        <p className="semper">Cursus suspendisse lectus etiam ut egestas. In pellentesque senectus
                                            purus lectus lobortis cursus consequat. Lacus hendrerit venenatis egestas sed.</p>
                                    </div>
                                </div>
                                <div className="col-xxl-12 p-0">
                                    <div className="highQulity-box fade_left">
                                        <div className="qulity-work-grp">
                                            <img src={AboutSecSvg2} alt="about-sec-svg2" />
                                            <p className="highQulity">Smart Repair System</p>
                                        </div>
                                        <p className="semper">Gravida tempor scelerisque scelerisque felis id metus tincidunt.
                                            Sollicitudin justo ut nec fermentum arcu nunc blandit egestas nec eu magna aliquet
                                            sed dictum dui.</p>
                                    </div>
                                    <div className="highQulity-box highQulity-box2 fade_left">
                                        <div className="qulity-work-grp">
                                            <img src={AboutSecSvg4} alt="about-sec-svg1" />
                                            <p className="highQulity">Affordable Pricing</p>
                                        </div>
                                        <p className="semper">Cursus sapien diam dolor ultrices mauris. Accumsan pellentesque semper
                                            egestas ac commodo. Fermentum cursus eu cursus non scelerisque nisl tempor.</p>
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
                    <h3 className="tackle">We're your trusted handyman service, here to tackle those home repairs and improvement
                        projects. Our skilled professionals handle everything from leaky faucets to furniture assembly, so you
                        can relax and enjoy your home.</h3>
                    <div className="row  whatWeRow">
                        <div className="col-xxl-6 col-xl-6 col-lg-5 whatWe">
                            <h3>Something What We Do</h3>
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
                    <h2 className="handyman-text legal fade_down">Experienced legal team</h2>
                    <p className="fusce elementum fade_down">Tellus nisl ultricies urna proin mauris massa urna. Magna sagittis
                        sagittis pharetra egestas eleifend posuere felis magna. Vitae vestibulum platea purus magnis pretium.
                    </p>
                    <div className="row ourTeam-Row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg1} alt="team-img1" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Kevin Martin</h2>
                                        <p>carpenter</p>
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
                                        <p>ELECTRICIAN</p>
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
                                        <p>Painter</p>
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
                                        <p>Cleaning</p>
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
                            <h3>Our Expert Will Be Available <span>Mon - Fri (9 Am - 6 Pm)</span> Book An Appointment For
                                Services.</h3>
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
