import React from 'react';
import { Link } from 'react-router-dom';
import RatingStar from '../assets/images/testimonials-page/rating-star.png';
import ClientImg1 from '../assets/images/testimonials-page/client-img1.jpg';
import ClientImg2 from '../assets/images/testimonials-page/client-img2.jpg';
import ClientImg3 from '../assets/images/testimonials-page/client-img3.jpg';
import ClientImg4 from '../assets/images/testimonials-page/client-img4.jpg';
import ClientImg5 from '../assets/images/testimonials-page/client-img5.jpg';
import ClientImg6 from '../assets/images/testimonials-page/client-img6.jpg';
import ClientImg7 from '../assets/images/testimonials-page/client-img7.jpg';
import ClientImg8 from '../assets/images/testimonials-page/client-img8.jpg';
import ClientImg9 from '../assets/images/testimonials-page/client-img9.jpg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';

const testimonials = [
    [ClientImg1, 'Vicky Finch', 'Allied Constructions handled our renovation with clear planning and steady site updates. The final finish was clean, practical, and exactly what we expected.'],
    [ClientImg2, 'Rachel York', 'Their team coordinated civil, electrical, and painting work smoothly. We appreciated the transparency in timelines and material choices.'],
    [ClientImg3, 'Helan Smith', 'The project was delivered with good workmanship and careful supervision. Small changes were handled without confusion.'],
    [ClientImg4, 'Max Walker', 'We hired Allied Constructions for roofing and waterproofing support. The team inspected the issue properly and completed the repair neatly.'],
    [ClientImg5, 'Kevin Martin', 'The interiors were planned around our actual usage. Storage, lighting, and finishing details all came together well.'],
    [ClientImg6, 'Melena Marshall', 'Professional team, responsive communication, and quality execution. The handover was smooth and well organized.'],
    [ClientImg7, 'Robert Mick', 'They helped us plan plumbing and electrical upgrades during renovation. The coordination saved time and reduced rework.'],
    [ClientImg8, 'Jessica Smith', 'Allied Constructions gave us a clear estimate and delivered dependable work. The site remained organized throughout.'],
    [ClientImg9, 'Mike Hardson', 'Good finishing quality and practical suggestions from the team. We would recommend them for construction and renovation work.'],
];

const Testimonials = () => {
    return (
        <div>
            <section className="section-one">
                <div className="page-img-header" id="testimonials-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Client Testimonials</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Testimonials">TESTIMONIALS</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="installation-section">
                <div className="container">
                    <div className="row testimonilas-row">
                        {testimonials.map(([image, name, text], index) => (
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 testimonials-box flip_left" key={name}>
                                <div className="testimonials-box-sub">
                                    <img src={RatingStar} alt="rating-star" />
                                    <h2>{text}</h2>
                                </div>
                                <div className="client-detils-box">
                                    <div className="client-img-main">
                                        <img src={image} alt={name} />
                                    </div>
                                    <div>
                                        <p className="client-name">{name}</p>
                                        <p className="comment-day">{index < 3 ? 'Recent project' : 'Verified client'}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="testimonials-btn fade_down">
                        <Link to="/Contact" className="btn-main btn2">Start Your Project
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
    );
};

export default Testimonials;
