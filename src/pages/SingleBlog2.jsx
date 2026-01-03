import { useState } from "react";
import { Link } from 'react-router-dom'
import SingleBlogImg2 from '../assets/images/blog-page/single-blog-img2.jpg';
import CalendarSvg from '../assets/images/svg/calendar.svg';
import TagSvg from '../assets/images/svg/tag-svg.svg';
import ShareSvg from '../assets/images/svg/share.svg';
import facebookSvg from '../assets/images/svg/facebook.svg';
import TwiiterSvg from '../assets/images/svg/twiiter.svg';
import InstaSvg from '../assets/images/svg/insta.svg';
import LinkdienSvg from '../assets/images/svg/linkdien.svg';
import QouteImg1 from '../assets/images/blog-page/qoute-img1.jpg';
import QouteImg2 from '../assets/images/blog-page/qoute-img2.jpg';
import SingleBlogImg3 from '../assets/images/blog-page/single-blog-img3.jpg';
import SingleBlogImg4 from '../assets/images/blog-page/single-blog-img4.jpg';
import LeftArrow from '../assets/images/svg/left-arrow.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import SearchSvg from '../assets/images/svg/search.svg';
import RecentPostsImg1 from '../assets/images/blog-page/recent-posts-img1.jpg';
import RecentPostsImg2 from '../assets/images/blog-page/recent-posts-img2.jpg';
import RecentPostsImg3 from '../assets/images/blog-page/recent-posts-img3.jpg';
import RecentPostsImg4 from '../assets/images/blog-page/recent-posts-img4.jpg';
import RecentPostsImg5 from '../assets/images/blog-page/recent-posts-img5.jpg';
import FooterLogo from '../assets/images/svg/footer-logo.svg';
import SingleBlogImg5 from '../assets/images/blog-page/single-blog-img5.png';
import XSvg from "../assets/images/svg/x.svg";
import LatestBlog from "../components/LatestBlog.jsx";

const SingleBlog2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleShare = () => setIsOpen((prev) => !prev);
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="faq-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Drain Maintenance Specialists in USA</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/OurBlog">blog / </Link>
                            <Link to="/SingleBlog">Drain maintenance specialists in USA</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section REPAIR & INSTALLATION ===================================== --> */}
            <section className="installation-section">
                <div className="container">
                    <div className="row" id="left-side-bar-row">
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
                                <h2 className="d-none">hidden</h2>
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
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <img className="single-blog-img2" src={SingleBlogImg2} alt="single-blog-img2" />
                            <div className="share-container-main position-relative">
                                <div className="tag-date border-bottom-0">
                                    <div className="tag-date-sub">
                                        <img className="blog-cal-svg" src={CalendarSvg} alt="calendar" />
                                        <p>20 Dec 2025</p>
                                    </div>
                                    <div className="tag-date-sub">
                                        <img src={TagSvg} alt="calendar" />
                                        <p>Handyman</p>
                                    </div>
                                </div>
                                <div className={`share-container ${isOpen ? "open" : ""}`}>
                                    <button className="share-button" onClick={toggleShare}>
                                        <img src={isOpen ? XSvg : ShareSvg} alt="share" />
                                    </button>
                                    <div className="social-icons">
                                        <a href="https://www.facebook.com" className="icon-sin">
                                            <img src={facebookSvg} alt="facebook" />
                                        </a>
                                        <a href="https://x.com" className="icon-sin">
                                            <img src={TwiiterSvg} alt="twiiter" />
                                        </a>
                                        <a href="https://www.instagram.com" className="icon-sin">
                                            <img src={InstaSvg} alt="insta" />
                                        </a>
                                        <a href="https://www.linkedin.com" className="icon-sin">
                                            <img src={LinkdienSvg} alt="linkdien" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p className="fusce fade_down show">Mi mattis egestas ac mattis lobortis. Ac sapien sed posuere
                                faucibus. Ultricies sem viverra hendrerit nisl morbi est semper orci urna. Amet adipiscing
                                sapien dui quis. Nunc tellus porttitor vitae amet fermentum velit tellus cras. Dui at senectus
                                fermentum a in nunc ultricies ultrices egestas. Neque tempus eu odio consectetur lacus. Sit
                                lorem morbi arcu odio tellus velit sed porttitor. Faucibus cras venenatis mattis mollis arcu.
                                Nibh eget massa tincidunt sagittis aenean sollicitudin nunc et. Fames pretium malesuada etiam
                                leo donec maecenas sodales fringilla.
                            </p>
                            <p className="fusce fade_down show">Ipsum sit netus nisi sapien vitae nec augue massa. Mi vel penatibus
                                non sit lacus mattis purus. Id sed non cursus sed tristique viverra feugiat egestas dis.
                                Porttitor diam at elementum massa eget et risus. Aliquet sed pulvinar auctor suspendisse mauris
                                arcu nunc. Pellentesque massa iaculis neque tincidunt ut dolor magna nec. In donec pretium in
                                nulla bibendum risus vel.
                            </p>
                            <p className="fusce fade_down show">A erat sed tellus hendrerit. Est enim in tristique arcu nibh sit
                                nullam quis pellentesque. Pellentesque elit.</p>
                            <div className="qoute-box">
                                <img className="qoute-img1" src={QouteImg1} alt="qoute-img1" />
                                <h2>Amidst the chaos of life, let your home be a crystal gentle dance of flames and the energy
                                    of creating a haven of pure serenity and magic.</h2>
                                <p className="Michel">Michel Clarck</p>
                                <img className="qoute-img2" src={QouteImg2} alt="qoute-img2" />
                            </div>
                            <h2 className="interdum fade_down">Donec commodo ac velit integer aliquam tellus pellentesque tincidunt
                                ultricies.</h2>
                            <p className="fusce fade_down mt-0">In pharetra lectus porttitor eros massa sit mattis quis. Ultricies
                                sed cras arcu integer nisi aliquam. Nibh consequat dignissim iaculis auctor tortor aliquam.
                                Condimentum orci consectetur risus vel vitae sit ipsum eu amet. Elit risus scelerisque sit
                                semper. Eu faucibus at diam pellentesque tortor bibendum nec ullamcorper. Morbi sem quis
                                porttitor suspendisse hendrerit quis rhoncus porttitor in. Sed eros amet bibendum odio lacus eu.
                                Elit volutpat vitae massa id.
                            </p>
                            <p className="fusce fade_down">Pretium orci quam volutpat tortor dignissim fames tellus. Pulvinar
                                pellentesque ut massa adipiscing neque risus tempor. Egestas molestie nibh amet sodales aliquam.
                                Feugiat at interdum nibh enim ornare. Accumsan sodales adipiscing fringilla eget nulla. Eget
                                nunc consequat non praesent pharetra nibh arcu vulputate arcu. Auctor venenatis elementum sed
                                tincidunt duis pretium ultrices. Nibh pharetra ut sed ipsum.
                            </p>
                            <div className="plan-body plumbing-body-list fade_down">
                                <ul>
                                    <li>In pharetra lectus porttitor eros massa sit mattis quis.</li>
                                    <li>Ultricies sed cras arcu integer nisi aliquam.</li>
                                    <li>Nibh consequat dignissim iaculis auctor tortor aliquam.</li>
                                    <li>Condimentum orci consectetur risus vel vitae sit ipsum eu amet.</li>
                                    <li>Eu faucibus at diam pellentesque tortor bibendum nec ullamcorper.</li>
                                </ul>
                            </div>
                            <div className="plumbing-grid img-animation-style1 reveal">
                                <img src={SingleBlogImg3} alt="single-blog-img3" />
                                <img src={SingleBlogImg4} alt="single-blog-img4" />
                            </div>
                            <h2 className="interdum fade_down">Ipsum eget non faucibus platea vel euismod dui ut.</h2>
                            <p className="fusce fade_down">Fames egestas vitae habitant blandit volutpat. Mi maecenas quam eu quis
                                maecenas. Maecenas tortor et vitae odio gravida. Porta nunc feugiat tortor lectus. Urna
                                hendrerit varius nulla odio neque amet. Felis id tortor in quis ipsum libero. Risus dolor
                                adipiscing purus nam bibendum sit nunc pharetra purus. Nam aliquam enim nulla amet.
                            </p>
                            <div className="diamond-nextbtn-head" id="diamond-nextbtn-head">
                                <div className="diamond-next-btn">
                                    <button className="diamond-btn next">
                                        <img src={LeftArrow} alt="left-arrow" />
                                    </button>
                                    <h3 className="d-none">hidden</h3>
                                    <h4>PREVIOUS</h4>
                                </div>
                                <div className="diamond-next-btn">
                                    <h4>NEXT</h4>
                                    <button className="diamond-btn next">
                                        <img src={RightArrowSvg} alt="right-arrow-svg" />
                                    </button>
                                </div>
                            </div>
                            <h2 className="interdum fade_down">Leave a Reply</h2>
                            <p className="fusce fade_down mt-0">Your email address will not be published. Required fields are
                                marked *
                            </p>
                            <form className="req-form-main leave-replyfrom">
                                <div className="input-main">
                                    <input type="text" placeholder="Name*" name="YourName" />
                                    <input type="text" placeholder="Email Address*" name="EmailID" />
                                </div>
                                <div className="input-main">
                                    <input type="text" placeholder="Comment*" name="YourMessage" />
                                </div>
                                <div className="Submit mb-0">
                                    <Link to="#" className="btn-main btn2">Post Comment
                                        <span className="arrow-section">
                                            <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                        </span>
                                        <div className="btn-box-left btn2"></div>
                                        <div className="btn-box-right btn2"></div>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ================== Section Blog ===================== --> */}
            <section className="installation-section pt-0">
                <div className="container">
                    <h2 className="handyman-text legal fade_down pt-0">Related blogs</h2>
                    <LatestBlog />
                </div>
            </section>
        </div>
    )
}

export default SingleBlog2