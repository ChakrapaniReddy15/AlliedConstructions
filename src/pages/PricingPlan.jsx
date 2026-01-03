import React, { useState } from "react";
import { Link } from 'react-router-dom'
import MonyBackImg from '../assets/images/pricing-page/mony-back-img.png';
import MonyBackImg2 from '../assets/images/pricing-page/mony-back-img2.png';
import MonyBackImg3 from '../assets/images/pricing-page/mony-back-img3.png';
import InnerMony1 from '../assets/images/pricing-page/inner-mony1.png';
import InnerMony2 from '../assets/images/pricing-page/inner-mony2.png';
import InnerMony3 from '../assets/images/pricing-page/inner-mony3.png';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import TopRated from "../components/TopRated";
import Faq from "../components/Faq";

const PricingPlan = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="pricing-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Pricing Plan</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/PricingPlan">pricing plan</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="quality-main about-qulity-main fade_down">
                                <p className="quality">BEST PLANS</p>
                            </div>
                            <h2 className="handyman-text fade_down">The best pricing plans</h2>
                            <p className="fusce fade_down">Aliquam mollis magna a molestie dapibus. Class aptent taciti sociosqu ad
                                litora torquent per conubia nostra.
                            </p>
                            <div className="toggle-container">
                                <span className={`toggle-label ${!isYearly ? "active" : ""}`}>Monthly</span>
                                <label className="toggle-switch">
                                    <input type="checkbox" id="toggle-input" checked={isYearly}
                                        onChange={() => setIsYearly((prev) => !prev)} />
                                    <span className="slid-btn"></span>
                                </label>
                                <span className={`toggle-label ${isYearly ? "active" : ""}`}>Yearly</span>
                                <span className="toggle-label discount">10% Discount</span>
                            </div>
                            <div className="mony-box-main fade_down">
                                <div className="mony-back-img-box">
                                    <img className="mony-back-img" src={MonyBackImg} alt="mony-back-img" />
                                    <img className="inner-img" src={InnerMony1} alt="inner-mony1" />
                                </div>
                                <div className="mony-back-img-box">
                                    <img className="mony-back-img" src={MonyBackImg3} alt="mony-back-img" />
                                    <img className="inner-img" src={InnerMony2} alt="inner-mony1" />
                                </div>
                                <div className="mony-back-img-box">
                                    <img className="mony-back-img" src={MonyBackImg2} alt="mony-back-img" />
                                    <img className="inner-img" src={InnerMony3} alt="inner-mony1" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 pricing-plans">
                            <div id="monthly-plan" className={`plan ${!isYearly ? "active" : ""}`}>
                                <div className="plan-main-box-main">
                                    <div className="plan-main-box plan1">
                                        <div className="plan-header">
                                            <h2 className="plan-text">BASIC PLAN</h2>
                                            <h3 className="plan-price">$65 <sub>/month</sub></h3>
                                        </div>
                                        <div className="plan-body">
                                            <ul>
                                                <li>10% Off On All Services</li>
                                                <li>Priority Scheduling</li>
                                                <li>Maintained Equipment</li>
                                                <li>Priority Scheduling</li>
                                                <li>Maintained Equipment</li>
                                            </ul>
                                            <div className="pricing-btn">
                                                <Link to="#" className="btn-main btn2">Get Started
                                                    <span className="arrow-section">
                                                        <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                                    </span>
                                                    <div className="btn-box-left btn2"></div>
                                                    <div className="btn-box-right btn2"></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="plan-main-box">
                                        <div className="plan-header">
                                            <h2 className="plan-text">GOLD PLAN</h2>
                                            <h3 className="plan-price">$120 <sub>/month</sub></h3>
                                        </div>
                                        <div className="plan-body">
                                            <ul>
                                                <li>10% Off On All Services</li>
                                                <li>Priority Scheduling</li>
                                                <li>Maintained Equipment</li>
                                                <li>Priority Scheduling</li>
                                                <li>Maintained Equipment</li>
                                            </ul>
                                            <div className="pricing-btn">
                                                <Link to="#" className="btn-main btn2">Get Started
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
                                <div className="plan-main-box">
                                    <div className="plan-header">
                                        <h2 className="plan-text">SILVER PLAN</h2>
                                        <h3 className="plan-price">$100 <sub>/month</sub></h3>
                                    </div>
                                    <div className="plan-body">
                                        <ul>
                                            <li>10% Off On All Services</li>
                                            <li>Priority Scheduling</li>
                                            <li>Maintained Equipment</li>
                                            <li>Priority Scheduling</li>
                                            <li>Maintained Equipment</li>
                                        </ul>
                                        <div className="pricing-btn">
                                            <Link to="#" className="btn-main btn2">Get Started
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
                            <div id="yearly-plan" className={`plan ${isYearly ? "active" : ""}`}>
                                <div className="plan-main-box-main">
                                    <div className="plan-main-box plan1">
                                        <div className="plan-header">
                                            <h2 className="plan-text">BASIC PLAN</h2>
                                            <h3 className="plan-price">$160 <sub>/Year</sub></h3>
                                        </div>
                                        <div className="plan-body">
                                            <ul>
                                                <li>10% Off On All Services</li>
                                                <li>Priority Scheduling</li>
                                                <li>Maintained Equipment</li>
                                                <li>Priority Scheduling</li>
                                                <li>Maintained Equipment</li>
                                            </ul>
                                            <div className="pricing-btn">
                                                <Link to="#" className="btn-main btn2">Get Started
                                                    <span className="arrow-section">
                                                        <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                                    </span>
                                                    <div className="btn-box-left btn2"></div>
                                                    <div className="btn-box-right btn2"></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="plan-main-box">
                                        <div className="plan-header">
                                            <h2 className="plan-text">GOLD PLAN</h2>
                                            <h3 className="plan-price">$340 <sub>/Year</sub></h3>
                                        </div>
                                        <div className="plan-body">
                                            <ul>
                                                <li>10% Off On All Services</li>
                                                <li>Priority Scheduling</li>
                                                <li>Maintained Equipment</li>
                                                <li>Priority Scheduling</li>
                                                <li>Maintained Equipment</li>
                                            </ul>
                                            <div className="pricing-btn">
                                                <Link to="#" className="btn-main btn2">Get Started
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
                                <div className="plan-main-box">
                                    <div className="plan-header">
                                        <h2 className="plan-text">SILVER PLAN</h2>
                                        <h3 className="plan-price">$650 <sub>/Year</sub></h3>
                                    </div>
                                    <div className="plan-body">
                                        <ul>
                                            <li>10% Off On All Services</li>
                                            <li>Priority Scheduling</li>
                                            <li>Maintained Equipment</li>
                                            <li>Priority Scheduling</li>
                                            <li>Maintained Equipment</li>
                                        </ul>
                                        <div className="pricing-btn">
                                            <Link to="#" className="btn-main btn2">Get Started
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
                    </div>
                </div>
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

export default PricingPlan