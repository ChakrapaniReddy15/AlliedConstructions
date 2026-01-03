import React from 'react'
import { Link } from 'react-router-dom'
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
import AirConditionSvg from '../assets/images/svg/airCondition.svg';
import PaintingSvg from '../assets/images/svg/painting.svg';
import ElectricalSvg from '../assets/images/svg/electrical.svg';
import SolarSvg from '../assets/images/svg/solar.svg';
import WeldingSvg from '../assets/images/svg/welding.svg';
import Faq from '../components/Faq';
import TopRated from '../components/TopRated';
import ProjectSection from '../components/ProjectSection';
import FreeContact from '../components/FreeContact';

const Services = () => {
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="services-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Our Services</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Services"> SERVICES</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight" id="services-page-section">
                <div className="container">
                    <div className="quality-main about-qulity-main fade_down">
                        <p className="quality">our services</p>
                    </div>
                    <div className="handyman-services-textMain">
                        <h2 className="handyman-text handyman-services services-page-text fade_down">We provide your all
                            required handyman services into your location
                        </h2>
                        <p className="fusce malesuada tellus fade_down mt-0">Volutpat et malesuada maecenas amet. Ultrices volutpat
                            auctor euismod eget pulvinar nulla porttitor. Faucibus faucibus consectetur et tellus magnis. Nunc
                            proin mauris enim duis aliquet fringilla. Erat semper amet turpis cursus. Vel tellus tellus risus eu
                            lacus volutpat morbi. Cursus tincidunt urna condimentum egestas integer.
                        </p>
                    </div>
                    <div className="row services-page-row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 services-page-col">
                            <Link to="/PlumbingService" className="services-slider-box">
                                <img className="services-icon" src={OurServicesimg1} alt="our-servicesimg1" />
                                <div className="services-icon-box">
                                    <img className="plumbing" src={PlumbingSvg} alt="plumbing" />
                                    <h2 className="services-solution-main-text">Plumbing Solutions</h2>
                                    <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                        lectus auctor enim pharetra pellentesque.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 services-page-col">
                            <Link to="/RoofingService" className="services-slider-box">
                                <img className="services-icon" src={OurServicesimg2} alt="our-servicesimg2" />
                                <div className="services-icon-box">
                                    <img className="plumbing" src={RoofingSvg} alt="plumbing" />
                                    <h2 className="services-solution-main-text">Roofing Solutions</h2>
                                    <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                        lectus auctor enim pharetra pellentesque.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 services-page-col">
                            <Link to="/CarpentryService" className="services-slider-box">
                                <img className="services-icon" src={OurServicesimg3} alt="our-servicesimg3" />
                                <div className="services-icon-box">
                                    <img className="plumbing" src={CarpentrySvg} alt="carpentry" />
                                    <h2 className="services-solution-main-text">Carpentry Solutions</h2>
                                    <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                        lectus auctor enim pharetra pellentesque.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 services-page-col">
                            <Link to="/CleaningService" className="services-slider-box">
                                <img className="services-icon" src={OurServicesimg4} alt="our-servicesimg4" />
                                <div className="services-icon-box">
                                    <img className="plumbing" src={CleaningSvg} alt="cleaning" />
                                    <h2 className="services-solution-main-text">Cleaning Solutions</h2>
                                    <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                        lectus auctor enim pharetra pellentesque.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 services-page-col">
                            <Link to="/AirConditionService" className="services-slider-box">
                                <img className="services-icon" src={OurServicesimg5} alt="our-servicesimg5" />
                                <div className="services-icon-box">
                                    <img className="plumbing" src={AirConditionSvg} alt="airCondition" />
                                    <h2 className="services-solution-main-text">Air Condition Solutions</h2>
                                    <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                        lectus auctor enim pharetra pellentesque.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 services-page-col">
                            <Link to="/PaintingService" className="services-slider-box">
                                <img className="services-icon" src={OurServicesimg6} alt="our-servicesimg6" />
                                <div className="services-icon-box">
                                    <img className="plumbing" src={PaintingSvg} alt="painting" />
                                    <h2 className="services-solution-main-text">Painting Solutions</h2>
                                    <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                        lectus auctor enim pharetra pellentesque.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 services-page-col">
                            <Link to="/ElectricalService" className="services-slider-box">
                                <img className="services-icon" src={OurServicesimg7} alt="our-servicesimg7" />
                                <div className="services-icon-box">
                                    <img className="plumbing" src={ElectricalSvg} alt="electrical" />
                                    <h2 className="services-solution-main-text">Electrical Solutions</h2>
                                    <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                        lectus auctor enim pharetra pellentesque.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 services-page-col">
                            <Link to="/SolarService" className="services-slider-box">
                                <img className="services-icon" src={OurServicesimg8} alt="our-servicesimg8" />
                                <div className="services-icon-box">
                                    <img className="plumbing" src={SolarSvg} alt="solar" />
                                    <h2 className="services-solution-main-text">Solar Solutions</h2>
                                    <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                        lectus auctor enim pharetra pellentesque.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 services-page-col">
                            <Link to="/WeldingService" className="services-slider-box">
                                <img className="services-icon" src={OurServicesimg9} alt="our-servicesimg9" />
                                <div className="services-icon-box">
                                    <img className="plumbing" src={WeldingSvg} alt="welding" />
                                    <h2 className="services-solution-main-text">Welding Solutions</h2>
                                    <p className="aliquam-text">Aliquam non tellus vitae adipiscing amet rutrum. Quisque
                                        lectus auctor enim pharetra pellentesque.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==================== Section Seven ================= --> */}
            <section className="section-seven" >
                <FreeContact />
            </section>
            {/* <!-- ================= Section Six =================== --> */}
            <section className="section-six pb-0 ProjectSection">
                <ProjectSection />
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

export default Services