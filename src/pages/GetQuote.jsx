import React, { useState } from "react";
import RequestQouteImg2 from '../assets/images/get-qoute-page/request-qoute-img2.png';
import DownArrowSvg from '../assets/images/svg/down-arrow.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import { Link } from "react-router-dom";
import OurProcess from "../components/OurProcess";
import TopRated from "../components/TopRated";
import Faq from "../components/Faq";

const GetQuote = () => {
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
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="get-quote-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Get Your Quote</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/GetQuote">GET YOUR QUOTE</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="quality-main about-qulity-main fade_down">
                                <p className="quality">get free estimate</p>
                            </div>
                            <h2 className="handyman-text fade_down">Pick a service to get a free quote</h2>
                            <p className="fusce fade_down">Morbi iaculis velit amet lectus cras tincidunt eu. Pulvinar fermentum erat ultrices a morbi ac felis ac dignissim.
                            </p>
                            <form className="req-form-main">
                                <div className="input-main">
                                    <input type="text" placeholder="Your Name*" name="YourName" />
                                    <input type="text" placeholder="Email ID*" name="EmailID" />
                                </div>
                                <div className="input-main">
                                    <input type="text" placeholder="Phone Number*" name="YourName" />
                                    <div className="wrapper">
                                        <div
                                            className="formDropDown"
                                            onClick={() => setIsOpenDrop(!isOpenDrop)}
                                        >
                                            {selectedService}
                                            <img
                                                className={`arrow-icon-form ${isOpenDrop ? "rotate" : ""}`}
                                                src={DownArrowSvg}
                                                alt="arrow-icon-form"
                                            />
                                        </div>

                                        {isOpenDrop && (
                                            <div className="position-relative">
                                                <ul className="formDropDown-ul-list">
                                                    {services.map((service, index) => (
                                                        <li key={index}>
                                                            <Link to="#" onClick={() => handleSelect(service)}>
                                                                {service}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="input-main">
                                    <input type="text" placeholder="Your Message*" name="YourMessage" />
                                </div>
                                <div className="Submit">
                                    <Link to="#" className="btn-main btn2">Submit
                                        <span className="arrow-section">
                                            <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                        </span>
                                        <div className="btn-box-left btn2"></div>
                                        <div className="btn-box-right btn2"></div>
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 position-relative request-qoute-img-main">
                            <img className="request-qoute-img" src={RequestQouteImg2} alt="request-qoute-img" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Five ===================================== --> */}
            <OurProcess />
            {/* <!-- =============== Section Nine ================ --> */}
            <section className="curved-section" id="get-quote-curved-section">
                <TopRated />
            </section>
            {/* <!-- ================= REPAIR & INSTALLATION =================== --> */}
            <section className="installation-section pt-0">
                <Faq />
            </section>

        </div>
    )
}

export default GetQuote