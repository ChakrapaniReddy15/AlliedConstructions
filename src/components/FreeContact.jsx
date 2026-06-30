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
                            <p className="quality">feel free to contact</p>
                        </div>
                        <h2 className="alliedconstruction-text premium-alliedconstruction fade_down">Get premium Allied Construction services from us!
                        </h2>
                    </div>
                    <Link to="/Contact" className="btn-main btn1">Contact Us
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
