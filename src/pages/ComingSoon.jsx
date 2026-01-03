import React, { useState, useEffect } from "react";
import EmailImg from '../assets/images/svg/email.svg';
import LocationImg from '../assets/images/svg/location.svg';
import FacebookImg from '../assets/images/svg/facebook.svg';
import TwiiterImg from '../assets/images/svg/twiiter.svg';
import InstaImg from '../assets/images/svg/insta.svg';
import LinkdienImg from '../assets/images/svg/linkdien.svg';
import FooterLogoImg from '../assets/images/svg/footer-logo.svg';
import HeadphoneSvg from '../assets/images/svg/headphone.svg';
import ComingSoonImg1 from '../assets/images/coming-soon-page/coming-soon-img1.png';
import { Link } from 'react-router-dom';

const ComingSoon = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        day: "00",
        hour: "00",
        minute: "00",
        second: "00",
    });

    useEffect(() => {
        const target = new Date("July 25, 2030 00:00:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const gap = target - now;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const d = Math.max(0, Math.floor(gap / day));
            const h = Math.max(0, Math.floor((gap % day) / hour));
            const m = Math.max(0, Math.floor((gap % hour) / minute));
            const s = Math.max(0, Math.floor((gap % minute) / second));

            setTimeLeft({
                day: d.toString().padStart(2, "0"),
                hour: h.toString().padStart(2, "0"),
                minute: m.toString().padStart(2, "0"),
                second: s.toString().padStart(2, "0"),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className="coming-soon">
            {/* <!-- ====================================== Header ===================================== --> */}
            <header className="header" id="coming-soon-header">
                <div className="small-header">
                    <div className="container small-header-sub-main">
                        <div className="small-header-sub">
                            <a href="mailto:contact@home.rakshak.com">
                                <p><img src={EmailImg} alt="email" /> contact@home.rakshak.com</p>
                            </a>
                            <p><img src={LocationImg} alt="location" /> 2972 Westheimer 96 Rd. Mexico</p>
                        </div>
                        <div className="small-header-media-main">
                            <a href="https://www.facebook.com"><img src={FacebookImg} alt="facebook" /></a>
                            <a href="https://x.com"><img src={TwiiterImg} alt="twitter" /></a>
                            <a href="https://www.instagram.com"><img src={InstaImg} alt="insta" /></a>
                            <a href="https://www.linkedin.com"><img src={LinkdienImg} alt="linkedin" /></a>
                        </div>
                    </div>
                </div>
                <div className="container header-sub coming-soon-headers">
                    <div className="logo">
                        <Link to="/"><img src={FooterLogoImg} alt="logo" /></Link>
                    </div>
                    <div className="contact headphone-main-coming-soon">
                        <div className="icon">
                            <img src={HeadphoneSvg} alt="headphone" />
                        </div>
                        <div className="call-info">
                            <p>Call Us</p>
                            <Link to="tel:+12483578866">+1 (248) 357 8866</Link>
                        </div>
                    </div>
                </div>
            </header>
            <section className="coming-soon-sec position-relative">
                <h1 className="d-none">hidden</h1>
                <h2 className="d-none">hidden</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 count-down-col">
                            <div className="count-down">
                                <div className="box">
                                    <h3>{timeLeft.day}</h3>
                                    <span>Day</span>
                                </div>
                                <div className="box">
                                    <h3>{timeLeft.hour}</h3>
                                    <span>Hour</span>
                                </div>
                                <div className="box">
                                    <h3>{timeLeft.minute}</h3>
                                    <span>Minute</span>
                                </div>
                                <div className="box">
                                    <h3>{timeLeft.second}</h3>
                                    <span>Second</span>
                                </div>
                            </div>
                            <div className="coming-soon-box">Coming Soon!</div>
                            <h4 className="our-website">Our Website is on its way.</h4>
                            <p className="notified">Get notified when we launch.</p>
                            <div className="coming-soon-subscribe">
                                <input type="text" name="enter email" placeholder="Enter your email here... " />
                                <div className="coming-soon-subscribe-btn">
                                    <Link to="#">Notify Me</Link>
                                </div>
                            </div>
                            <div className="rights-reserved" id="rights-reserved">
                                <h2>Copyright © {new Date().getFullYear()}. All rights reserved by
                                    <a href="https://1.envato.market/website-portfolio" target="_blank">The_Krishna.</a>
                                </h2>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <img className="coming-soon-img1" src={ComingSoonImg1} alt="coming-soon-img1" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ComingSoon


