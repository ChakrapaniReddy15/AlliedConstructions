import React from 'react'
import RobotImg from '../assets/images/error-page/robot.png';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="error404-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">404 Page</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/NotFound">404 PAGE</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Error Section ===================================== --> */}
            <section className="installation-section">
                <div className="container">
                    <div className="quality-main ourProcess fade_down">
                        <p className="quality">404 ERROR</p>
                    </div>
                    <h2 className="handyman-text legal fade_down">Oops ! The Page Not Found.</h2>
                    <p className="fusce iaculis fade_down">We apologize for the inconvenience. You can use our search bar to find
                        what you're looking for, or contact us for further assistance.
                    </p>
                    <div className="robot-img-text">
                        <div className="oops">OOPS...</div>
                        <img src={RobotImg} alt="robot" />
                        <div className="error-text">
                            <h2 className="Error404-text" data-text="404">404</h2>
                            <p className="Error404-text error" data-text="ERROR">ERROR</p>
                        </div>
                    </div>
                    <div className="testimonials-btn mt-0 fade_down">
                        <Link to="/" className="btn-main btn2">Back To Home
                            <span className="arrow-section">
                                <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                            </span>
                            <div className="btn-box-left btn2"></div>
                            <div className="btn-box-right btn2"></div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotFound