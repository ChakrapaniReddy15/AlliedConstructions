import React from 'react'
import { Link } from 'react-router-dom';
import Share from '../assets/images/svg/share.svg';
import FacebookImg from '../assets/images/svg/facebook.svg';
import TwiiterImg from '../assets/images/svg/twiiter.svg';
import InstaImg from '../assets/images/svg/insta.svg';
import LinkdienImg from '../assets/images/svg/linkdien.svg';

const TeamSocialMedia = () => {
    return (
        <div>
            <div className="share-btn-main">
                <div className="share">
                    <img src={Share} alt="share" />
                    <ul className="submenu">
                        <li>
                            <a className="facebook" href="https://www.facebook.com">
                                <img src={FacebookImg} alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a className="twitter" href="https://x.com">
                                <img src={TwiiterImg} alt="twiiter" />
                            </a>
                        </li>
                        <li>
                            <a className="tumblr" href="https://www.instagram.com">
                                <img src={InstaImg} alt="insta" />
                            </a>
                        </li>
                        <li>
                            <a className="pinterest" href="https://www.linkedin.com">
                                <img src={LinkdienImg} alt="linkdien" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TeamSocialMedia