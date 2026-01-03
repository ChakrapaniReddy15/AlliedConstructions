import React from 'react'
import { Link } from 'react-router-dom';
import BlogImg1 from '../assets/images/blog-page/blog-img1.jpg';
import BlogImg2 from '../assets/images/blog-page/blog-img2.jpg';
import BlogImg3 from '../assets/images/blog-page/blog-img3.jpg';
import TagSvg from '../assets/images/svg/tag-svg.svg';
import calendarSvg from '../assets/images/svg/calendar.svg';

const LatestBlog = () => {
    return (
        <div>
            <div className="row blog-section-row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="/SingleBlog" className="blog-box">
                        <div className="overflow-hidden">
                            <img className="blog-img" src={BlogImg1} alt="blog-img1" />
                        </div>
                        <div className="tag-date">
                            <div className="tag-date-sub">
                                <img className="blog-cal-svg" src={calendarSvg} alt="calendar" />
                                <p>25 Dec 2025</p>
                            </div>
                            <div className="tag-date-sub">
                                <img src={TagSvg} alt="calendar" />
                                <p>Plumbing</p>
                            </div>
                        </div>
                        <h3 className="tips">Tips To Troubleshooting Common Plumbing Issues</h3>
                        <p className="viverra">Dui ac dui in ultricies lorem nunc mauris non. Facilisis tempor egestas nunc
                            vitae gravida. Massa viverra</p>
                    </Link>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="/SingleBlog" className="blog-box">
                        <div className="overflow-hidden">
                            <img className="blog-img" src={BlogImg2} alt="blog-img2" />
                        </div>
                        <div className="tag-date">
                            <div className="tag-date-sub">
                                <img className="blog-cal-svg" src={calendarSvg} alt="calendar" />
                                <p>20 Dec 2025</p>
                            </div>
                            <div className="tag-date-sub">
                                <img src={TagSvg} alt="calendar" />
                                <p>Handyman</p>
                            </div>
                        </div>
                        <h3 className="tips">How To Solve Washing Machine Service Issues</h3>
                        <p className="viverra">Elit diam facilisis lectus faucibus. Facilisi in tellus etiam gravida
                            fermentum. Adipiscing netus sed potenti sed...</p>
                    </Link>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="/SingleBlog" className="blog-box">
                        <div className="overflow-hidden">
                            <img className="blog-img" src={BlogImg3} alt="blog-img3" />
                        </div>
                        <div className="tag-date">
                            <div className="tag-date-sub">
                                <img className="blog-cal-svg" src={calendarSvg} alt="calendar" />
                                <p>15 Dec 2025</p>
                            </div>
                            <div className="tag-date-sub">
                                <img src={TagSvg} alt="calendar" />
                                <p>Carpentry</p>
                            </div>
                        </div>
                        <h3 className="tips">Behind the Scenes: The Unsung Heroes of Home Maintenance</h3>
                        <p className="viverra">Interdum vel sed molestie odio nisi lacus risus. Sociis at egestas pharetra
                            nulla lorem ut. Ornare molestie...</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog