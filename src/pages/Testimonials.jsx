import React from 'react'
import { Link } from 'react-router-dom'
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

const Testimonials = () => {
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="testimonials-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Public Cheers For Us!</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Testimonials">TESTIMONIALS</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Testimonial ===================================== --> */}
            <section className="installation-section">
                <div className="container">
                    <div className="row testimonilas-row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 testimonials-box flip_left">
                            <div className="testimonials-box-sub">
                                <img src={RatingStar} alt="rating-star" />
                                <h2>Felis ut accumsan auctor egestas quis. Vel volutpat arcu semper faucibus amet auctor a
                                    leo ipsum. Vulputate lorem amet pharetra justo erat adipiscing volutpat diam. Malesuada
                                    mollis adipiscing dis egestas id. Ullamcorper pulvinar dui posuere.</h2>
                            </div>
                            <div className="client-detils-box">
                                <div className="client-img-main">
                                    <img src={ClientImg1} alt="client-img1" />
                                </div>
                                <div>
                                    <p className="client-name">Vicky Finch</p>
                                    <p className="comment-day">5 days ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 testimonials-box flip_left">
                            <div className="testimonials-box-sub">
                                <img src={RatingStar} alt="rating-star" />
                                <h2>Senectus sapien elit massa sapien at. Nulla enim diam leo id semper. Auctor etiam erat orci
                                    quam sed id. Elementum cursus tortor facilisis cras convallis mi cursus pellentesque in.
                                    Lacus eget adipiscing nulla nullam tristique vitae non vulputate in. </h2>
                            </div>
                            <div className="client-detils-box">
                                <div className="client-img-main">
                                    <img src={ClientImg2} alt="client-img2" />
                                </div>
                                <div>
                                    <p className="client-name">Rachel York</p>
                                    <p className="comment-day">7 days ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 testimonials-box flip_left">
                            <div className="testimonials-box-sub">
                                <img src={RatingStar} alt="rating-star" />
                                <h2>Sit posuere pulvinar egestas nam. Risus rhoncus faucibus libero risus. Eros id dolor quis
                                    vitae viverra amet amet. Congue interdum euismod aliquam tempor nisl.</h2>
                            </div>
                            <div className="client-detils-box">
                                <div className="client-img-main">
                                    <img src={ClientImg3} alt="client-img3" />
                                </div>
                                <div>
                                    <p className="client-name">Helan Smith</p>
                                    <p className="comment-day">10 days ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 testimonials-box flip_left">
                            <div className="testimonials-box-sub">
                                <img src={RatingStar} alt="rating-star" />
                                <h2>In dui mauris tempus nec sapien. Sed suscipit arcu non id ultricies. Amet vitae vestibulum
                                    urna pharetra eget magna et etiam porttitor. Scelerisque nunc ipsum nulla nunc commodo eget
                                    fringilla sed.</h2>
                            </div>
                            <div className="client-detils-box">
                                <div className="client-img-main">
                                    <img src={ClientImg4} alt="client-img4" />
                                </div>
                                <div>
                                    <p className="client-name">Max Walker</p>
                                    <p className="comment-day">10 days ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 testimonials-box flip_left">
                            <div className="testimonials-box-sub">
                                <img src={RatingStar} alt="rating-star" />
                                <h2>Sed arcu molestie faucibus nascetur massa semper. Sit elementum pulvinar eget id convallis
                                    etiam. Ornare ac sed cras in adipiscing libero sit dapibus.</h2>
                            </div>
                            <div className="client-detils-box">
                                <div className="client-img-main">
                                    <img src={ClientImg5} alt="client-img5" />
                                </div>
                                <div>
                                    <p className="client-name">Kevin Martin</p>
                                    <p className="comment-day">10 days ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 testimonials-box flip_left">
                            <div className="testimonials-box-sub">
                                <img src={RatingStar} alt="rating-star" />
                                <h2>Faucibus justo facilisi parturient diam. Eget dapibus vestibulum pretium eget sit orci
                                    ipsum. Dolor metus enim mi placerat odio sed. Leo nec facilisis est vel. Enim amet
                                    consectetur facilisi elementum magna purus nisi porttitor ac.</h2>
                            </div>
                            <div className="client-detils-box">
                                <div className="client-img-main">
                                    <img src={ClientImg6} alt="client-img6" />
                                </div>
                                <div>
                                    <p className="client-name">Melena Marshall</p>
                                    <p className="comment-day">10 days ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 testimonials-box flip_left">
                            <div className="testimonials-box-sub">
                                <img src={RatingStar} alt="rating-star" />
                                <h2>Eu id adipiscing justo mauris eu rhoncus. Pellentesque mauris fames id in. Vitae proin
                                    euismod risus tellus elit amet eleifend potenti malesuada. In gravida tortor morbi tristique
                                    maecenas fames faucibus. Vestibulum tempus est nisl cursus interdum.</h2>
                            </div>
                            <div className="client-detils-box">
                                <div className="client-img-main">
                                    <img src={ClientImg7} alt="client-img7" />
                                </div>
                                <div>
                                    <p className="client-name">Robert Mick</p>
                                    <p className="comment-day">10 days ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 testimonials-box flip_left">
                            <div className="testimonials-box-sub">
                                <img src={RatingStar} alt="rating-star" />
                                <h2>Quis faucibus enim urna diam eu ornare mollis placerat. Purus praesent sit morbi lacus nunc.
                                    Pellentesque a etiam rhoncus eu amet vulputate volutpat. Nec adipiscing morbi euismod urna
                                    vulputate facilisi facilisi.</h2>
                            </div>
                            <div className="client-detils-box">
                                <div className="client-img-main">
                                    <img src={ClientImg8} alt="client-img8" />
                                </div>
                                <div>
                                    <p className="client-name">Jessica Smith</p>
                                    <p className="comment-day">10 days ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 testimonials-box flip_left">
                            <div className="testimonials-box-sub">
                                <img src={RatingStar} alt="rating-star" />
                                <h2>Turpis eget volutpat aliquam mauris suspendisse sociis mauris in. Lacus imperdiet volutpat
                                    pretium a id cursus dui ornare tellus. Et sollicitudin quis quam in.</h2>
                            </div>
                            <div className="client-detils-box">
                                <div className="client-img-main">
                                    <img src={ClientImg9} alt="client-img9" />
                                </div>
                                <div>
                                    <p className="client-name">Mike Hardson</p>
                                    <p className="comment-day">10 days ago</p>
                                </div>
                            </div>
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
        </div>
    )
}

export default Testimonials