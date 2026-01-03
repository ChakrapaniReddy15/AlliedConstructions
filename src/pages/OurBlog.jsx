import React from 'react'
import BlogImg1 from '../assets/images/blog-page/blog-img1.jpg';
import BlogImg2 from '../assets/images/blog-page/blog-img2.jpg';
import BlogImg3 from '../assets/images/blog-page/blog-img3.jpg';
import BlogImg4 from '../assets/images/blog-page/blog-img4.jpg';
import BlogImg5 from '../assets/images/blog-page/blog-img5.jpg';
import BlogImg6 from '../assets/images/blog-page/blog-img6.jpg';
import BlogImg7 from '../assets/images/blog-page/blog-img7.jpg';
import BlogImg8 from '../assets/images/blog-page/blog-img8.jpg';
import BlogImg9 from '../assets/images/blog-page/blog-img9.jpg';
import CalendarSvg from '../assets/images/svg/calendar.svg';
import TagSvg from '../assets/images/svg/tag-svg.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import { Link } from 'react-router-dom';
import TopRated from '../components/TopRated.jsx';
import Faq from '../components/Faq.jsx';

const OurBlog = () => {
    return (
        <div>
            {/* <!-- ======================== Section One ===================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="blog-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Our Blogs</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/OurBlog">blogs</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ======================= Section Eight ===================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="quality-main ourProcess fade_down">
                        <p className="quality">BLOGS & ARTICALS</p>
                    </div>
                    <h2 className="handyman-text legal fade_down">Read our latest blogs</h2>
                    <p className="fusce elementum fade_down">Feugiat cursus et morbi sit nunc varius. Tristique pharetra tortor
                        ultrices accumsan egestas ullamcorper. Sit varius quam sit velit donec eu in ornare suspendisse.
                    </p>
                    <div className="row blog-section-row" id="blog-page-row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <Link to="/SingleBlog" className="blog-box">
                                <div className="overflow-hidden">
                                    <img className="blog-img" src={BlogImg1} alt="blog-img1" />
                                </div>
                                <div className="tag-date">
                                    <div className="tag-date-sub">
                                        <img className="blog-cal-svg" src={CalendarSvg} alt="calendar" />
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
                                    <img className="blog-img" src={BlogImg2} alt="blog-img1" />
                                </div>
                                <div className="tag-date">
                                    <div className="tag-date-sub">
                                        <img className="blog-cal-svg" src={CalendarSvg} alt="calendar" />
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
                                    <img className="blog-img" src={BlogImg3} alt="blog-img1" />
                                </div>
                                <div className="tag-date">
                                    <div className="tag-date-sub">
                                        <img className="blog-cal-svg" src={CalendarSvg} alt="calendar" />
                                        <p>15 Dec 2025</p>
                                    </div>
                                    <div className="tag-date-sub">
                                        <img src={TagSvg} alt="calendar" />
                                        <p>Carpentry</p>
                                    </div>
                                </div>
                                <h3 className="tips">Behind the Scenes: The Unsung Heroes of Home Maintenance</h3>
                                <p className="viverra">Interdum vel sed molestie odio nisi lacus risus. Sociis at egestas pharetra
                                    nulla lorem ut. Ornare molestie Ornare molestie......</p>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <Link to="/SingleBlog" className="blog-box">
                                <div className="overflow-hidden">
                                    <img className="blog-img" src={BlogImg4} alt="blog-img4" />
                                </div>
                                <div className="tag-date">
                                    <div className="tag-date-sub">
                                        <img className="blog-cal-svg" src={CalendarSvg} alt="calendar" />
                                        <p>10 Dec 2025</p>
                                    </div>
                                    <div className="tag-date-sub">
                                        <img src={TagSvg} alt="calendar" />
                                        <p>Plumbing</p>
                                    </div>
                                </div>
                                <h3 className="tips">Knowing When to DIY and When to Call a Pro</h3>
                                <p className="viverra">Dui ac dui in ultricies lorem nunc mauris non. Facilisis tempor egestas nunc
                                    vitae gravida. Massa viverra...</p>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <Link to="/SingleBlog" className="blog-box">
                                <div className="overflow-hidden">
                                    <img className="blog-img" src={BlogImg5} alt="blog-img5" />
                                </div>
                                <div className="tag-date">
                                    <div className="tag-date-sub">
                                        <img className="blog-cal-svg" src={CalendarSvg} alt="calendar" />
                                        <p>05 Dec 2025</p>
                                    </div>
                                    <div className="tag-date-sub">
                                        <img src={TagSvg} alt="calendar" />
                                        <p>Handyman</p>
                                    </div>
                                </div>
                                <h3 className="tips">Money-Saving Plumbing Fixes You Can Do Yourself</h3>
                                <p className="viverra">Elit diam facilisis lectus faucibus. Facilisi in tellus etiam gravida
                                    fermentum. Adipiscing netus sed potenti sed...</p>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <Link to="/SingleBlog" className="blog-box">
                                <div className="overflow-hidden">
                                    <img className="blog-img" src={BlogImg6} alt="blog-img6" />
                                </div>
                                <div className="tag-date">
                                    <div className="tag-date-sub">
                                        <img className="blog-cal-svg" src={CalendarSvg} alt="calendar" />
                                        <p>01 Dec 2025</p>
                                    </div>
                                    <div className="tag-date-sub">
                                        <img src={TagSvg} alt="calendar" />
                                        <p>Carpentry</p>
                                    </div>
                                </div>
                                <h3 className="tips">Why Calling Renovator At Correct Time Save You From All Problem</h3>
                                <p className="viverra">Interdum vel sed molestie odio nisi lacus risus. Sociis at egestas pharetra
                                    nulla lorem ut. Ornare molestie...</p>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <Link to="/SingleBlog" className="blog-box">
                                <div className="overflow-hidden">
                                    <img className="blog-img" src={BlogImg7} alt="blog-img7" />
                                </div>
                                <div className="tag-date">
                                    <div className="tag-date-sub">
                                        <img className="blog-cal-svg" src={CalendarSvg} alt="calendar" />
                                        <p>25 Nov 2025</p>
                                    </div>
                                    <div className="tag-date-sub">
                                        <img src={TagSvg} alt="calendar" />
                                        <p>Plumbing</p>
                                    </div>
                                </div>
                                <h3 className="tips">Revitalizing Your Home, One Repair at a Time</h3>
                                <p className="viverra">Dui ac dui in ultricies lorem nunc mauris non. Facilisis tempor egestas nunc
                                    vitae gravida. Massa viverra...</p>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <Link to="/SingleBlog" className="blog-box">
                                <div className="overflow-hidden">
                                    <img className="blog-img" src={BlogImg8} alt="blog-img8" />
                                </div>
                                <div className="tag-date">
                                    <div className="tag-date-sub">
                                        <img className="blog-cal-svg" src={CalendarSvg} alt="calendar" />
                                        <p>20 Nov 2025</p>
                                    </div>
                                    <div className="tag-date-sub">
                                        <img src={TagSvg} alt="calendar" />
                                        <p>Plumbing</p>
                                    </div>
                                </div>
                                <h3 className="tips">Tales from the Frontlines of Home Restoration</h3>
                                <p className="viverra">Elit diam facilisis lectus faucibus. Facilisi in tellus etiam gravida
                                    fermentum. Adipiscing netus sed potenti sed...</p>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <Link to="/SingleBlog" className="blog-box">
                                <div className="overflow-hidden">
                                    <img className="blog-img" src={BlogImg9} alt="blog-img9" />
                                </div>
                                <div className="tag-date">
                                    <div className="tag-date-sub">
                                        <img className="blog-cal-svg" src={CalendarSvg} alt="calendar" />
                                        <p>15 Nov 2025</p>
                                    </div>
                                    <div className="tag-date-sub">
                                        <img src={TagSvg} alt="calendar" />
                                        <p>Carpentry</p>
                                    </div>
                                </div>
                                <h3 className="tips">How Skilled Workers Keep Homes Running Smoothly</h3>
                                <p className="viverra">Interdum vel sed molestie odio nisi lacus risus. Sociis at egestas pharetra
                                    nulla lorem ut. Ornare molestie...</p>
                            </Link>
                        </div>
                    </div>
                    <div className="testimonials-btn fade_down">
                        <Link to="#" className="btn-main btn2">Load More
                            <span className="arrow-section">
                                <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                            </span>
                            <div className="btn-box-left btn2"></div>
                            <div className="btn-box-right btn2"></div>
                        </Link>
                    </div>
                </div>
            </section>
            {/* <!-- =============== Section Nine ================ --> */}
            <section className="curved-section">
                <TopRated />
            </section>
            {/* <!-- ================= REPAIR & INSTALLATION =================== --> */}
            <section className="installation-section exatra-class">
                <Faq />
            </section>
        </div>
    )
}

export default OurBlog