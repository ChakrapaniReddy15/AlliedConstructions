import React from 'react'
import BlogImg1 from '../assets/images/blog-page/blog-img1.jpg';
import BlogImg2 from '../assets/images/blog-page/blog-img2.jpg';
import BlogImg3 from '../assets/images/blog-page/blog-img3.jpg';
import BlogImg4 from '../assets/images/blog-page/blog-img4.jpg';
import BlogImg5 from '../assets/images/blog-page/blog-img5.jpg';
import BlogImg6 from '../assets/images/blog-page/blog-img6.jpg';
import BlogImg7 from '../assets/images/blog-page/blog-img7.jpg';
import BlogImg9 from '../assets/images/blog-page/blog-img9.jpg';
import CalendarSvg from '../assets/images/svg/calendar.svg';
import TagSvg from '../assets/images/svg/tag-svg.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import SearchSvg from '../assets/images/svg/search.svg';
import RecentPostsImg1 from '../assets/images/blog-page/recent-posts-img1.jpg';
import RecentPostsImg2 from '../assets/images/blog-page/recent-posts-img2.jpg';
import RecentPostsImg3 from '../assets/images/blog-page/recent-posts-img3.jpg';
import RecentPostsImg4 from '../assets/images/blog-page/recent-posts-img4.jpg';
import RecentPostsImg5 from '../assets/images/blog-page/recent-posts-img5.jpg';
import SingleBlogImg5 from '../assets/images/blog-page/single-blog-img5.png';
import FooterLogo from '../assets/images/svg/footer-logo.svg';
import { Link } from 'react-router-dom';
import TopRated from '../components/TopRated.jsx';
import Faq from '../components/Faq.jsx';

const Blog2 = () => {
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="blog-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Our Blogs</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Blog2">blogs-2</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="quality-main ourProcess fade_down">
                                <p className="quality">BLOGS & ARTICALS</p>
                            </div>
                            <h2 className="handyman-text legal fade_down">Read our latest blogs</h2>
                            <p className="fusce elementum fade_down">Feugiat cursus et morbi sit nunc varius. Tristique pharetra
                                tortor ultrices accumsan egestas ullamcorper. Sit varius quam sit velit donec eu in ornare
                                suspendisse.
                            </p>
                            <div className="row blog-section-row" id="blog-page-row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
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
                                        <p className="viverra">Dui ac dui in ultricies lorem nunc mauris non. Facilisis tempor
                                            egestas nunc vitae gravida. Massa viverra</p>
                                    </Link>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <Link to="/SingleBlog2" className="blog-box">
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
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <Link to="/SingleBlog3" className="blog-box">
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
                                        <p className="viverra">Interdum vel sed molestie odio nisi lacus risus. Sociis at egestas
                                            pharetra nulla lorem ut. Ornare molestie Ornare molestie......</p>
                                    </Link>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
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
                                        <p className="viverra">Dui ac dui in ultricies lorem nunc mauris non. Facilisis tempor
                                            egestas nunc vitae gravida. Massa viverra...</p>
                                    </Link>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <Link to="/SingleBlog2" className="blog-box">
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
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <Link to="/SingleBlog3" className="blog-box">
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
                                        <p className="viverra">Interdum vel sed molestie odio nisi lacus risus. Sociis at egestas
                                            pharetra nulla lorem ut. Ornare molestie...</p>
                                    </Link>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
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
                                        <p className="viverra">Dui ac dui in ultricies lorem nunc mauris non. Facilisis tempor
                                            egestas nunc vitae gravida. Massa viverra...</p>
                                    </Link>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <Link to="/SingleBlog2" className="blog-box">
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
                                        <p className="viverra">Interdum vel sed molestie odio nisi lacus risus. Sociis at egestas
                                            pharetra nulla lorem ut. Ornare molestie...</p>
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
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                            <div className="search-box-main">
                                <div className="search-input">
                                    <input type="text" placeholder="Search Here..." />
                                    <div className="search-box">
                                        <img src={SearchSvg} alt="search" />
                                    </div>
                                </div>
                            </div>
                            <div className="single-services-black-box" id="recent-post-box">
                                <h3>Recent Posts</h3>
                            </div>
                            <Link to="/OurBlog" className="recent-post-main">
                                <img src={RecentPostsImg1} alt="recent-posts-img1" />
                                <div className="recent-post-text-main">
                                    <p>20 DEC 2025</p>
                                    <h2>Tips To Troubleshooting Common Plumbing Issues</h2>
                                </div>
                            </Link>
                            <Link to="/OurBlog" className="recent-post-main">
                                <img src={RecentPostsImg2} alt="recent-posts-img2" />
                                <div className="recent-post-text-main">
                                    <p>15 DEC 2025</p>
                                    <h2>Knowing When to DIY and When to Call a Pro</h2>
                                </div>
                            </Link>
                            <Link to="/OurBlog" className="recent-post-main">
                                <img src={RecentPostsImg3} alt="recent-posts-img3" />
                                <div className="recent-post-text-main">
                                    <p>5 DEC 2025</p>
                                    <h2>Repairing furniture gives you peace and knowing that if more</h2>
                                </div>
                            </Link>
                            <Link to="/OurBlog" className="recent-post-main">
                                <img src={RecentPostsImg4} alt="recent-posts-img4" />
                                <div className="recent-post-text-main">
                                    <p>1 DEC 2025</p>
                                    <h2>The Ultimate Floor Cleaner For A Gleaming Home</h2>
                                </div>
                            </Link>
                            <Link to="/OurBlog" className="recent-post-main">
                                <img src={RecentPostsImg5} alt="recent-posts-img5" />
                                <div className="recent-post-text-main">
                                    <p>30 NOV 2025</p>
                                    <h2>Pure Serenity Unleash The Fire Of A Crystal Home</h2>
                                </div>
                            </Link>
                            <div className="ad-box mb-0">
                                <img src={FooterLogo} alt="footer-logo" />
                                <h3 className="frist-services">Get 10% Off on Your First Service</h3>
                                <div className="testimonials-btn mt-0" id="ad-btn">
                                    <Link to="/PricingPlan" className="btn-main btn1">Grab The Offer
                                        <span className="arrow-section">
                                            <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                        </span>
                                        <div className="btn-box-left btn1"></div>
                                        <div className="btn-box-right btn1"></div>
                                    </Link>
                                </div>
                                <img className="single-blog-img5" src={SingleBlogImg5} alt="single-blog-img5" />
                            </div>
                        </div>
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

export default Blog2