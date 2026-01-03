import React, { useState } from "react";
import PlayBtnSvg from '../assets/images/svg/play-btn.svg';
import DotArrow from '../assets/images/svg/dot-arrow-png.svg';
import video1 from '../assets/video/video1.mp4';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import { Link } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

const HeroVideo = () => {

    // YouTube Video PopUp 
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <div>
            <div className="background-img-slider-SecOne heroSlider2">
                <div className="slider-section">
                    <span className="video-bg-slide">
                        <video autoPlay muted loop>
                            <source src={video1} type="video/mp4" />
                        </video>
                    </span>
                </div>
                <div className="container">
                    <div className="row sec-one-row heroSlider2-row">
                        <div className="col-xxl-6 col-xl-6 col-lg-9 sec-one-col1 fade_down">
                            <div className="quality-main">
                                <p className="quality">Allied Constructions</p>
                            </div>
                            <h1 className="Handyman-main-text">Sustainable Construction Solution</h1>
                            <h2 className="eget">Build it strong. Build it beautiful. Build it to last generations.</h2>
                            <div className="sec-one-buttons">
                                <Link to="/GetQuote" className="btn-main btn1">Get A Quote
                                    <span className="arrow-section">
                                        <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                    </span>
                                    <div className="btn-box-left"></div>
                                    <div className="btn-box-right"></div>
                                </Link>
                                <div className="position-relative">
                                    <button className="diamond-btn youtube" onClick={openModal}>
                                        <img src={PlayBtnSvg} alt="play-btn" />
                                    </button>
                                    <div className="right-arrow-svg">
                                        <img src={DotArrow} alt="dot-arrow-png" />
                                        <p className="play-now">Play Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal
                            isOpen={isOpen}
                            onRequestClose={closeModal}
                            contentLabel="YouTube Video"
                            className="video-modal"
                            overlayClassName="video-overlay"
                        >
                            <div className="video-wrapper">
                                <iframe
                                    width="100%"
                                    height="400"
                                    src="https://www.youtube.com/embed/Hh3MjLaDNG8?autoplay=1"
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <button onClick={closeModal} className="close-btn">✖</button>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroVideo