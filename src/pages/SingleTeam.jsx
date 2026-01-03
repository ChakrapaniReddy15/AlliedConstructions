import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import FacebookImg from '../assets/images/svg/facebook.svg';
import TwiiterImg from '../assets/images/svg/twiiter.svg';
import InstaImg from '../assets/images/svg/insta.svg';
import LinkdienImg from '../assets/images/svg/linkdien.svg';
import YouTubeImg from '../assets/images/svg/youtube.svg';
import SingleTeamImg1 from '../assets/images/team-page/single-teamImg1.jpg';
import AboutSecSvg1 from '../assets/images/svg/about-sec-svg1.svg';
import AboutSecSvg2 from '../assets/images/svg/about-sec-svg2.svg';
import LeftArrow from '../assets/images/svg/left-arrow.svg';
import RightArrow from '../assets/images/svg/right-arrow-svg.svg';
import Faq from '../components/Faq.jsx';
import TopRated from '../components/TopRated.jsx';

const progressItems = [
    { title: "Plumbing", percentage: 74 },
    { title: "Renovation", percentage: 94 },
    { title: "Cleaning", percentage: 86 },
    { title: "Electrical", percentage: 70 },
];


const SingleTeam = () => {
    const sectionRef = useRef(null);
    const barsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                barsRef.current.forEach((bar) => {
                    if (bar) {
                        const percentage = parseInt(bar.dataset.percentage, 10);
                        const progressContent = bar.querySelector(".progress-content");
                        const numberMark = bar.querySelector(".progress-number-mark");
                        const percentText = bar.querySelector(".percent");

                        let start = 0;
                        const duration = 2000;
                        const startTime = performance.now();

                        const step = (now) => {
                            const progress = Math.min((now - startTime) / duration, 1);
                            const value = Math.round(start + (percentage - start) * progress);

                            progressContent.style.width = `${value}%`;

                            numberMark.style.left = `${value}%`;

                            percentText.textContent = `${value}%`;

                            if (progress < 1) requestAnimationFrame(step);
                        };

                        requestAnimationFrame(step);
                    }
                });

                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            {/*<!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="team-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Richard Smith</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Team">TEAM /</Link>
                            <Link to="/SingleTeam">Richard Smith</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row single-team-row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="team-media-icon-col">
                                <div className="team-media-icon-main zoom_in">
                                    <a href="https://www.facebook.com" className="team-media-icon">
                                        <img src={FacebookImg} alt="facebook" />
                                    </a>
                                    <a href="https://x.com" className="team-media-icon">
                                        <img src={TwiiterImg} alt="twiiter" />
                                    </a>
                                    <a href="https://www.instagram.com" className="team-media-icon">
                                        <img src={InstaImg} alt="insta" />
                                    </a>
                                    <a href="https://www.linkedin.com" className="team-media-icon">
                                        <img src={LinkdienImg} alt="linkdien" />
                                    </a>
                                    <a href="https://www.youtube.com" className="team-media-icon">
                                        <img src={YouTubeImg} alt="youtube" />
                                    </a>
                                </div>
                                <img className="single-teamImg1 zoom_in" src={SingleTeamImg1} alt="single-teamImg1" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 overflow-hidden">
                            <div className="quality-main about-qulity-main fade_down">
                                <p className="quality">electrician</p>
                            </div>
                            <h2 className="handyman-text fade_down">Richard Smith</h2>
                            <p className="fusce fade_down">Nulla quam volutpat aliquam cursus sed feugiat tellus platea netus. Quis
                                elementum vitae turpis felis ac. Dolor velit in blandit fermentum. Eget et tortor enim donec
                                facilisis est urna elementum nam semper nunc commodo nulla elementum venenatis.
                            </p>
                            <div className="contact-team-main">
                                <div className="contact-team-person fade_down">
                                    <h2>Phone:</h2>
                                    <Link to="tel:+12345689874">
                                        <p>+1 234 568 9874</p>
                                    </Link>
                                </div>
                                <div className="contact-team-person mb-0 fade_down">
                                    <h2>Email:</h2>
                                    <Link to="mailto:richardsmith@homeraksak.com">
                                        <p>richardsmith@homeraksak.com</p>
                                    </Link>
                                </div>
                            </div>
                            <div id="first-sec" ref={sectionRef}>
                                <div className="highQulity-box fade_right">
                                    <div className="qulity-work-grp qulity-work-grp-single-team">
                                        <img src={AboutSecSvg1} alt="about-sec-svg1" />
                                        <p className="highQulity">Professional Skills</p>
                                    </div>
                                    <p className="semper">Diam mattis in libero adipiscing nunc. Turpis sem dui egestas tellus
                                        suscipit eu consequat tellus vestibulum. Donec lacus feugiat risus arcu est lorem
                                        tincidunt consequat. Ipsum scelerisque nulla cras diam adipiscing sit. Nunc enim
                                        dignissim egestas nunc ac lectus.
                                    </p>
                                </div>
                                {progressItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`progress-bar ${idx === progressItems.length - 1 ? "mb-0" : ""}`}
                                        data-percentage={item.percentage}
                                        ref={(el) => (barsRef.current[idx] = el)}
                                    >
                                        <h3 className="progress-title-holder">
                                            <span className="progress-title">{item.title}</span>
                                            <span className="progress-number-wrapper">
                                                <span className="progress-number-mark">
                                                    <span className="percent"></span>
                                                </span>
                                            </span>
                                        </h3>
                                        <div className="progress-content-outter">
                                            <div className="progress-content" style={{ width: "0%" }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="highQulity-box Restructuring-main fade_right">
                                <div className="qulity-work-grp qulity-work-grp-single-team">
                                    <img src={AboutSecSvg2} alt="about-sec-svg2" />
                                    <p className="highQulity">Areas Of Expertise</p>
                                </div>
                                <p className="semper">Est eu ultricies curabitur morbi ac consequat. Sit habitant maecenas tincidunt
                                    tellus enim hac nibh. Imperdiet laoreet elementum vitae ut. Orci sit ullamcorper integer sem
                                    volutpat ultrices. Nisi sit sed sit elementum mauris mi tincidunt et non.</p>
                                <h4 className="Restructuring">Restructuring and transformation</h4>
                                <p>Ut amet ut et tristique ut condimentum. Dolor id sed penatibus sit enim adipiscing aliquet
                                    nunc adipiscing. Volutpat pharetra sed sed quis lectus quis.</p>
                                <h4 className="Restructuring">Business transaction support</h4>
                                <p>Scelerisque phasellus elit et mi suspendisse natoque odio platea. Molestie tincidunt sed
                                    euismod risus in suspendisse elementum amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="diamond-nextbtn-head">
                        <div className="diamond-next-btn">
                            <button className="diamond-btn next">
                                <img src={LeftArrow} alt="left-arrow" />
                            </button>
                            <h4>Kevin Copper</h4>
                        </div>
                        <div className="diamond-next-btn">
                            <h4>Max Walker</h4>
                            <button className="diamond-btn next">
                                <img src={RightArrow} alt="right-arrow-svg" />
                            </button>
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

export default SingleTeam