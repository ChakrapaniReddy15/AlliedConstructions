import React from 'react'
import { Link } from 'react-router-dom'
import BlogListImg1 from '../assets/images/blog-page/blog-list-img1.jpg';
import BlogListImg2 from '../assets/images/blog-page/blog-list-img2.jpg';
import BlogListImg3 from '../assets/images/blog-page/blog-list-img3.jpg';
import BlogListImg4 from '../assets/images/blog-page/blog-list-img4.jpg';
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
import TopRated from '../components/TopRated.jsx';
import Faq from '../components/Faq.jsx';

const Blog3 = () => {
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="blog-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Our Blogs</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Blog3">blogs-3</Link>
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
                                <div className="col-xxl-12">
                                    <Link to="/SingleBlog" className="blog-box blog-box-list">
                                        <div className="overflow-hidden">
                                            <img className="blog-img" src={BlogListImg1} alt="blog-list-img1" />
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
                                        <h3 className="tips tips-blog-list-text">Tips To Troubleshooting Common Plumbing Issues</h3>
                                        <p className="viverra viverra2">Commodo semper bibendum adipiscing orci bibendum eu lectus
                                            sed. Commodo cursus vitae augue luctus nibh. Congue sit quisque volutpat libero
                                            tempor a id cursus purus.semper bibendum adipiscing orci bibendum eu lectus sed
                                            Commodo cursus vitae augue luctus nibh.
                                        </p>
                                    </Link>
                                </div>
                                <div className="col-xxl-12">
                                    <Link to="/SingleBlog2" className="blog-box blog-box-list">
                                        <div className="overflow-hidden">
                                            <img className="blog-img" src={BlogListImg2} alt="blog-list-img2" />
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
                                        <h3 className="tips tips-blog-list-text">How To Solve Washing Machine Service Issues</h3>
                                        <p className="viverra  viverra2">Commodo semper bibendum adipiscing orci bibendum eu lectus
                                            sed. Commodo cursus vitae augue luctus nibh. Congue sit quisque volutpat libero
                                            tempor a id cursus purus.semper bibendum adipiscing orci bibendum eu lectus sed
                                            Commodo cursus vitae augue luctus nibh.</p>
                                    </Link>
                                </div>
                                <div className="col-xxl-12">
                                    <Link to="/SingleBlog3" className="blog-box blog-box-list">
                                        <div className="overflow-hidden">
                                            <img className="blog-img" src={BlogListImg3} alt="blog-list-img3" />
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
                                        <h3 className="tips tips-blog-list-text">Behind the Scenes: The Unsung Heroes of Home
                                            Maintenance</h3>
                                        <p className="viverra  viverra2">Commodo semper bibendum adipiscing orci bibendum eu lectus
                                            sed. Commodo cursus vitae augue luctus nibh. Congue sit quisque volutpat libero
                                            tempor a id cursus purus.semper bibendum adipiscing orci bibendum eu lectus sed
                                            Commodo cursus vitae augue luctus nibh.</p>
                                    </Link>
                                </div>
                                <div className="col-xxl-12">
                                    <Link to="/SingleBlog" className="blog-box blog-box-list">
                                        <div className="overflow-hidden">
                                            <img className="blog-img" src={BlogListImg4} alt="blog-list-img4" />
                                        </div>
                                        <div className="tag-date">
                                            <div className="tag-date-sub">
                                                <img className="blog-cal-svg" src={CalendarSvg} alt="calendar" />
                                                <p>10 Dec 2025</p>
                                            </div>
                                            <div className="tag-date-sub">
                                                <img src={TagSvg} alt="calendar" />
                                                <p>Cleaning</p>
                                            </div>
                                        </div>
                                        <h3 className="tips tips-blog-list-text">Knowing When to DIY and When to Call a Pro</h3>
                                        <p className="viverra  viverra2">Commodo semper bibendum adipiscing orci bibendum eu lectus
                                            sed. Commodo cursus vitae augue luctus nibh. Congue sit quisque volutpat libero
                                            tempor a id cursus purus.semper bibendum adipiscing orci bibendum eu lectus sed
                                            Commodo cursus vitae augue luctus nibh.</p>
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

export default Blog3