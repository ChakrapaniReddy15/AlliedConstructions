import React from 'react'
import { Link } from 'react-router-dom'
import SingleProjectImgPerson from '../assets/images/project-page/singleProject-img-person.jpg';
import LeftArrowSvg from '../assets/images/svg/left-arrow.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import SingleProjectImg3 from '../assets/images/project-page/singleProject-img3.jpg';
import AboutSecSvg1 from '../assets/images/svg/about-sec-svg1.svg';
import AboutSecSvg2 from '../assets/images/svg/about-sec-svg2.svg';
import AboutSecSvg3 from '../assets/images/svg/about-sec-svg3.svg';
import AboutSecSvg4 from '../assets/images/svg/about-sec-svg4.svg';
import TopRated from '../components/TopRated.jsx';

const SingleProject2 = () => {
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="single-project-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Commercial Eco-Friendly Pest Control</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Projects">PROJECTS /</Link>
                            <Link to="/SingleProject">Commercial Eco-Friendly Pest Control</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row single-project2-row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 overflow-hidden">
                            <p className="fusce fade_down mt-0">Purus auctor eu rhoncus mi enim facilisi. In suspendisse libero
                                suspendisse lacinia vulputate faucibus fusce. Blandit ultrices morbi eu rhoncus amet at.
                                Placerat in mi id dolor odio nulla. Feugiat in volutpat iaculis sit. Tincidunt gravida enim eget
                                arcu turpis sed nunc metus est. Purus sed elementum tristique sit malesuada sagittis odio. Ipsum
                                dolor enim nulla sed nulla dignissim. Tincidunt quam tellus vitae hac scelerisque massa.
                                Condimentum sit interdum eget vel congue egestas pretium.
                            </p>
                            <div className="project-detail-box">
                                <div className="Category-main pt-0">
                                    <h2>Category :</h2>
                                    <h2>Industrial</h2>
                                </div>
                                <div className="Category-main">
                                    <h2>Client :</h2>
                                    <h2>John Duo</h2>
                                </div>
                                <div className="Category-main">
                                    <h2>Date :</h2>
                                    <h2>22-2-2024</h2>
                                </div>
                                <div className="Category-main">
                                    <h2>Location :</h2>
                                    <h2>Evanto HQ 24 Fifth st</h2>
                                </div>
                                <div className="Category-main border-bottom-0 pb-0">
                                    <h2>Year :</h2>
                                    <h2>2025</h2>
                                </div>
                            </div>
                            <h2 className="interdum fade_down">Adipiscing iaculis iaculis enim enim</h2>
                            <p className="fusce fade_down mt-0">In pharetra lectus porttitor eros massa sit mattis quis. Ultricies
                                sed cras arcu integer nisi aliquam. Nibh consequat dignissim iaculis auctor tortor aliquam.
                                Condimentum orci consectetur risus vel vitae sit ipsum eu amet. Elit risus scelerisque sit
                                semper.
                            </p>
                            <p className="fusce fade_down">Pretium orci quam volutpat tortor dignissim fames tellus. Pulvinar
                                pellentesque ut massa adipiscing neque risus tempor. Egestas molestie nibh amet sodales aliquam.
                                Feugiat at interdum nibh enim ornare.
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
                            <h2 className="interdum fade_down">Ridiculus metus mi non pellentesque</h2>
                            <p className="fusce fade_down mt-0">Lobortis euismod diam eu bibendum vel porta nisl vulputate montes.
                                Dignissim et facilisis cras non pharetra enim fermentum dictum vitae. Auctor molestie ultrices
                                interdum quis diam lectus. Platea cras suspendisse tincidunt aliquet varius sed pretium nulla.
                            </p>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="team-media-icon-col">
                                <img className="single-teamImg1 zoom_in"
                                    src={SingleProjectImgPerson} alt="singleProject-img-person" />
                            </div>
                        </div>
                    </div>
                    <div className="diamond-nextbtn-head">
                        <div className="diamond-next-btn">
                            <button className="diamond-btn next">
                                <img src={LeftArrowSvg} alt="left-arrow" />
                            </button>
                            <h3 className="d-none">hidden</h3>
                            <h4>Pipes Installation, Repair, & Replacement</h4>
                        </div>
                        <div className="diamond-next-btn">
                            <h4>Professional Clean Service</h4>
                            <button className="diamond-btn next">
                                <img src={RightArrowSvg} alt="right-arrow-svg" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- =============== Section Nine ================ --> */}
            <section className="curved-section">
                <TopRated />
            </section>
            {/* <!-- =============== Section REPAIR & INSTALLATION ============== --> */}
            <section className="installation-section pt-0">
                <div className="container">
                    <div className="quality-main about-qulity-main fade_down">
                        <p className="quality">why choose home rakshak</p>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <h2 className="handyman-text fade_down">Count on us for all your new life to broken handyman services.
                            </h2>
                            <div className="about-sec-img-main">
                                <img className="singleProject-img3 img-animation-style1 reveal"
                                    src={SingleProjectImg3} alt="about-sec-img1" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="row highQulity-box-row overflow-hidden mt-0">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="highQulity-box fade_right">
                                        <img src={AboutSecSvg1} alt="about-sec-svg1" />
                                        <p className="highQulity">High Quality Work</p>
                                        <p className="semper">Convallis semper feugiat fermentum at a congue pulvinar et.</p>
                                    </div>
                                    <div className="highQulity-box highQulity-box2 fade_right">
                                        <img src={AboutSecSvg3} alt="about-sec-svg3" />
                                        <p className="highQulity">Customized Solution</p>
                                        <p className="semper">Potenti et convallis scelerisque mattis cursus at orci vitae
                                            tincidunt.</p>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="highQulity-box fade_left">
                                        <img src={AboutSecSvg2} alt="about-sec-svg2" />
                                        <p className="highQulity">Smart Repair System</p>
                                        <p className="semper">Eu sed non habitasse auctor nisl cursus tincidunt at dictum.</p>
                                    </div>
                                    <div className="highQulity-box highQulity-box2 fade_left">
                                        <img src={AboutSecSvg4} alt="about-sec-svg4" />
                                        <p className="highQulity">Affordable Pricing</p>
                                        <p className="semper">Sapien iaculis dignissim lorem commodo ornare diam non gravida.</p>
                                    </div>
                                </div>
                                <p className="semper blandit">Tortor bibendum eget urna nisl lorem egestas lacinia pretium eget. Sed
                                    amet amet tortor blandit quam arcu id vestibulum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleProject2