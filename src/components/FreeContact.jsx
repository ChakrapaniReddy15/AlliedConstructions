import React from 'react'
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import { Link } from 'react-router-dom';

const FreeContact = () => {
    return (
        <div>
            <div className="container">
                <div className="free-contact-sec-main">
                    <div>
                        <div className="quality-main about-qulity-main fade_down">
                            <p className="quality">fell free to contact</p>
                        </div>
                        <h2 className="handyman-text premium-handyman fade_down">Get premium allied constructions service from us!
                        </h2>
                    </div>
                    <Link to="/contact" className="btn-main btn1">Contact Us
                        <span className="arrow-section">
                            <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                        </span>
                        <div className="btn-box-left btn1"></div>
                        <div className="btn-box-right btn1"></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FreeContact