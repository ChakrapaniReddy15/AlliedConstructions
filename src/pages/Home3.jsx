import React, { useState } from "react";
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
import OurServicesimg1 from '../assets/images/home-page/our-servicesimg1.jpg';
import OurServicesimg2 from '../assets/images/home-page/our-servicesimg2.jpg';
import OurServicesimg3 from '../assets/images/home-page/our-servicesimg3.jpg';
import OurServicesimg4 from '../assets/images/home-page/our-servicesimg4.jpg';
import OurServicesimg5 from '../assets/images/home-page/our-servicesimg5.jpg';
import OurServicesimg6 from '../assets/images/home-page/our-servicesimg6.jpg';
import OurServicesimg7 from '../assets/images/home-page/our-servicesimg7.jpg';
import OurServicesimg8 from '../assets/images/home-page/our-servicesimg8.jpg';
import OurServicesimg9 from '../assets/images/home-page/our-servicesimg9.jpg';
import PlumbingSvg from '../assets/images/svg/plumbing.svg';
import RoofingSvg from '../assets/images/svg/roofing.svg';
import CarpentrySvg from '../assets/images/svg/carpentry.svg';
import CleaningSvg from '../assets/images/svg/cleaning.svg';
import airConditionSvg from '../assets/images/svg/airCondition.svg';
import PaintingSvg from '../assets/images/svg/painting.svg';
import ElectricalSvg from '../assets/images/svg/electrical.svg';
import SolarSvg from '../assets/images/svg/solar.svg';
import WeldingSvg from '../assets/images/svg/welding.svg';
import DownArrowSvg from '../assets/images/svg/down-arrow.svg';
import RequestQouteImg from '../assets/images/get-qoute-page/request-qoute-img.png';
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
import LatestBlog from "../components/LatestBlog.jsx";
import HeroVideo from "../components/HeroVideo.jsx";


const Home = () => {
    // For Request a quote DropDown
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [selectedService, setSelectedService] = useState("Choose Service*");
    const services = [
        "Plumbing Solutions",
        "Roofing Solutions",
        "Carpentry Solutions",
        "Cleaning Solutions",
        "Air Condition Solutions",
        "Painting Solutions",
        "Electrical Solutions",
        "Solar Solutions",
        "Welding Solutions",
    ];

    const handleSelect = (service) => {
        setSelectedService(service);
        setIsOpenDrop(false);
    };

    return (
        <>
            {/* <!-- ======================= Section One ======================= --> */}
            <section className="section-one">
                <HeroVideo />
            </section>
            {/* <!-- ====================================== Section Two ===================================== --> */}
            <section className="section-two">
                <div className="container">
                    <div className="quality-main about-qulity-main fade_down">
                        <p className="quality">about Allied Constructions</p>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <h2 className="handyman-text fade_down">A Company that change and solve your all kind of construction
                                solutions</h2>
                            <div className="about-sec-img-main">
                                <img className="about-sec-img1 img-animation-style1 reveal" src={AboutSecImg1} alt="about-sec-img1" />
                                <img className="about-sec-img2 img-animation-style2 reveal" src={AboutSecImg2} alt="about-sec-img2" />
                                <img className="about-sec-img3 img-animation-style6 reveal" src={AboutSecImg3} alt="about-sec-img3" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="fusce fade_down">
                                We deliver complete construction solutions designed to adapt, innovate, and solve real-world challenges.
                                From planning to execution, our expert team ensures quality craftsmanship, timely delivery, and reliable
                                results for projects of every scale. With a strong focus on precision, safety, and customer satisfaction,
                                we turn ideas into durable structures built to last.
                            </p>

                            <div className="row highQulity-box-row overflow-hidden">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="highQulity-box fade_right">
                                        <img src={AboutSecSvg1} style={{
                                            filter: 'brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(7488%) hue-rotate(357deg) brightness(91%) contrast(91%)'
                                        }} alt="about-sec-svg1" />
                                        <p className="highQulity">Superior Build Quality</p>
                                        <p className="semper">
                                            We use proven construction methods and quality materials to ensure strength,
                                            durability, and long-lasting performance in every project.
                                        </p>
                                    </div>
                                    <div className="highQulity-box highQulity-box2 fade_right">
                                        <img src={AboutSecSvg3} style={{
                                            filter: 'brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(7488%) hue-rotate(357deg) brightness(91%) contrast(91%)'
                                        }} alt="about-sec-svg3" />
                                        <p className="highQulity">Tailored Design Solutions</p>
                                        <p className="semper">
                                            Every project is customized to your space, budget, and lifestyle, delivering
                                            functional layouts and designs that reflect your vision.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="highQulity-box fade_left">
                                        <img src={AboutSecSvg2} style={{
                                            filter: 'brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(7488%) hue-rotate(357deg) brightness(91%) contrast(91%)'
                                        }} alt="about-sec-svg2" />
                                        <p className="highQulity">Project Execution</p>
                                        <p className="semper">
                                            Seamless coordination across planning, construction, and finishing to ensure quality delivery
                                            at every stage of the project.
                                        </p>
                                    </div>
                                    <div className="highQulity-box highQulity-box2 fade_left">
                                        <img src={AboutSecSvg4} style={{
                                            filter: 'brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(7488%) hue-rotate(357deg) brightness(91%) contrast(91%)'
                                        }} alt="about-sec-svg4" />
                                        <p className="highQulity">Transparent & Fair Pricing</p>
                                        <p className="semper">
                                            We offer clear cost estimates and value-driven pricing with no hidden charges,
                                            ensuring quality construction within your budget.
                                        </p>
                                    </div>
                                </div>
                                <p className="semper blandit">
                                    With a strong foundation in design, engineering, and execution, we deliver complete construction
                                    and interior solutions that balance quality, functionality, and long-term value.
                                </p>
                                <div className="about-sec-contact-main">
                                    <Link to="/About" className="btn-main btn2">Read More
                                        <span className="arrow-section">
                                            <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                        </span>
                                        <div className="btn-box-left btn2"></div>
                                        <div className="btn-box-right btn2"></div>
                                    </Link>
                                    <div className="contact-box">
                                        <div className="headphone-icon">
                                            <img src={HeadphoneSvg} style={{
                                            filter: 'brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(7488%) hue-rotate(357deg) brightness(91%) contrast(91%)'
                                        }} alt="headphone" />
                                        </div>
                                        <div className="call-info-book">
                                            <p>Call For Booking</p>
                                            <Link to="tel:+12483578866">+91-9347111242</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Three ===================================== --> */}
            <section className="section-three">
                <div className="container">
                    <div className="quality-main about-qulity-main fade_down">
                        <p className="quality">our services</p>
                    </div>
                    <div className="handyman-services-textMain">
                        <h2 className="handyman-text handyman-services fade_down">We provide your all required handyman services
                            into your location
                        </h2>
                        <p className="fusce malesuada fade_down mt-0">Volutpat et malesuada maecenas amet. Ultrices volutpat auctor
                            euismod eget pulvinar nulla porttitor. Faucibus faucibus consectetur et tellus magnis. Nunc proin
                            mauris enim duis aliquet fringilla. Erat semper amet turpis cursus. Vel tellus tellus risus eu lacus
                            volutpat morbi. Cursus tincidunt urna condimentum egestas integer.
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
                            <SwiperSlide>
                                <Link to="/PlumbingService">
                                    <div className="services-slider-box">
                                        <img className="services-icon" src={OurServicesimg1} alt="our-servicesimg1" />
                                        <div className="services-icon-box">
                                            <img className="plumbing" src={PlumbingSvg} alt="plumbing" />
                                            <h2 className="services-solution-main-text">Plumbing Solutions</h2>
                                            <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                                lectus auctor enim pharetra pellentesque.</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/RoofingService">
                                    <div className="services-slider-box">
                                        <img className="services-icon" src={OurServicesimg2} alt="our-servicesimg2" />
                                        <div className="services-icon-box">
                                            <img className="plumbing" src={RoofingSvg} alt="plumbing" />
                                            <h2 className="services-solution-main-text">Roofing Solutions</h2>
                                            <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                                lectus auctor enim pharetra pellentesque.</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/CarpentryService">
                                    <div className="services-slider-box">
                                        <img className="services-icon" src={OurServicesimg3} alt="our-servicesimg3" />
                                        <div className="services-icon-box">
                                            <img className="plumbing" src={CarpentrySvg} alt="carpentry" />
                                            <h2 className="services-solution-main-text">Carpentry Solutions</h2>
                                            <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                                lectus auctor enim pharetra pellentesque.</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/CleaningService">
                                    <div className="services-slider-box">
                                        <img className="services-icon" src={OurServicesimg4} alt="our-servicesimg4" />
                                        <div className="services-icon-box">
                                            <img className="plumbing" src={CleaningSvg} alt="cleaning" />
                                            <h2 className="services-solution-main-text">Cleaning Solutions</h2>
                                            <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                                lectus auctor enim pharetra pellentesque.</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/AirConditionService">
                                    <div className="services-slider-box">
                                        <img className="services-icon" src={OurServicesimg5} alt="our-servicesimg5" />
                                        <div className="services-icon-box">
                                            <img className="plumbing" src={airConditionSvg} alt="airCondition" />
                                            <h2 className="services-solution-main-text">Air Condition Solutions</h2>
                                            <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                                lectus auctor enim pharetra pellentesque.</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/PaintingService">
                                    <div className="services-slider-box">
                                        <img className="services-icon" src={OurServicesimg6} alt="our-servicesimg6" />
                                        <div className="services-icon-box">
                                            <img className="plumbing" src={PaintingSvg} alt="painting" />
                                            <h2 className="services-solution-main-text">Painting Solutions</h2>
                                            <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                                lectus auctor enim pharetra pellentesque.</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>


                            <SwiperSlide>
                                <Link to="/ElectricalService">
                                    <div className="services-slider-box">
                                        <img className="services-icon" src={OurServicesimg7} alt="our-servicesimg7" />
                                        <div className="services-icon-box">
                                            <img className="plumbing" src={ElectricalSvg} alt="electrical" />
                                            <h2 className="services-solution-main-text">Electrical Solutions</h2>
                                            <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                                lectus auctor enim pharetra pellentesque.</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to="/SolarService">
                                    <div className="services-slider-box">
                                        <img className="services-icon" src={OurServicesimg8} alt="our-servicesimg8" />
                                        <div className="services-icon-box">
                                            <img className="plumbing" src={SolarSvg} alt="solar" />
                                            <h2 className="services-solution-main-text">Solar Solutions</h2>
                                            <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                                lectus auctor enim pharetra pellentesque.</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/WeldingService">
                                    <div className="services-slider-box">
                                        <img className="services-icon" src={OurServicesimg9} alt="our-servicesimg9" />
                                        <div className="services-icon-box">
                                            <img className="plumbing" src={WeldingSvg} alt="welding" />
                                            <h2 className="services-solution-main-text">Welding Solutions</h2>
                                            <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                                lectus auctor enim pharetra pellentesque.</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <div className="View-btn-sec">
                <div className="container">
                    <div className="View-btn-sec-btn-main">
                        <Link to="/Services" className="btn-main btn2">View All Services
                            <span className="arrow-section">
                                <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                            </span>
                            <div className="btn-box-left btn2"></div>
                            <div className="btn-box-right btn2"></div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <!-- ====================================== Section Five ===================================== --> */}
            <OurProcess />
            {/* <!-- ====================================== Section Six ===================================== --> */}
            <section className="section-six">
                <ProjectSection />
            </section>
            {/* <!-- ====================================== Section Seven ===================================== --> */}
            <section className="section-seven" >
                <FreeContact />
            </section>
            {/* <!-- ============================= Section Eight ============================== --> */}
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
            {/* <!-- =============== Section Nine ================ --> */}
            <section className="curved-section">
                <TopRated />
            </section>
            {/* <!-- ================= REPAIR & INSTALLATION =================== --> */}
            <section className="installation-section">
                <Faq />
            </section>
        </>
    )
}

export default Home