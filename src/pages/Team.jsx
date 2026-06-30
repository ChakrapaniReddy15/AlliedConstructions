import React from 'react'
import TeamSocialMedia from '../components/TeamSocialMedia.jsx';
import TeamImg1 from '../assets/images/team-page/team-img1.jpg';
import TeamImg2 from '../assets/images/team-page/team-img2.jpg';
import TeamImg3 from '../assets/images/team-page/team-img3.jpg';
import TeamImg4 from '../assets/images/team-page/team-img4.jpg';
import TeamImg5 from '../assets/images/team-page/team-img5.jpg';
import TeamImg6 from '../assets/images/team-page/team-img6.jpg';
import TeamImg7 from '../assets/images/team-page/team-img7.jpg';
import TeamImg8 from '../assets/images/team-page/team-img8.jpg';
import TeamImg9 from '../assets/images/team-page/team-img9.jpg';
import TeamImg10 from '../assets/images/team-page/team-img10.jpg';
import TeamImg11 from '../assets/images/team-page/team-img11.jpg';
import TeamImg12 from '../assets/images/team-page/team-img12.jpg';
import TopRated from '../components/TopRated.jsx';
import Faq from '../components/Faq.jsx';
import Calender from '../assets/images/svg/calendar.svg';
import { Link } from 'react-router-dom';


const Team = () => {
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="team-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Our Team</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Team">TEAM</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row ourTeam-Row team-page-row mt-0">
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
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg5} alt="team-img5" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Kevin Copper</h2>
                                        <p>Plumbing Lead</p>
                                    </div>
                                </Link>
                                <TeamSocialMedia />
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg6} alt="team-img6" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Robert Mick</h2>
                                        <p>Carpentry Lead</p>
                                    </div>
                                </Link>
                                <TeamSocialMedia />
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg7} alt="team-img7" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Millie Brown</h2>
                                        <p>AC Specialist</p>
                                    </div>
                                </Link>
                                <TeamSocialMedia />
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg8} alt="team-img8" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Matteo Ermete</h2>
                                        <p>Handover Coordinator</p>
                                    </div>
                                </Link>
                                <TeamSocialMedia />
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg9} alt="team-img9" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Susana Marco</h2>
                                        <p>Solar Service</p>
                                    </div>
                                </Link>
                                <TeamSocialMedia />
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg10} alt="team-img10" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Jessica Smith</h2>
                                        <p>Electrical Specialist</p>
                                    </div>
                                </Link>
                                <TeamSocialMedia />
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg11} alt="team-img11" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Mike Hardson</h2>
                                        <p>Welding Service</p>
                                    </div>
                                </Link>
                                <TeamSocialMedia />
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ourTeam-Col">
                            <div className="team-img-container">
                                <img className="team-img" src={TeamImg12} alt="team-img12" />
                                <Link to="/SingleTeam">
                                    <div className="team-mem-details">
                                        <h2>Vinicio Peppe</h2>
                                        <p>Roofing Service</p>
                                    </div>
                                </Link>
                                <TeamSocialMedia />
                            </div>
                        </div>
                    </div>
                    <div className="Appointment-box fade_down">
                        <div className="container Appointment-box-sub">
                            <Link to="/Contact" className="diamond-btn calendar-btn">
                                <img src={Calender} alt="calendar" />
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
            <section className="installation-section pt-0">
                <Faq />
            </section>
        </div>
    )
}

export default Team
