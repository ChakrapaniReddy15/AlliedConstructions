import React from 'react'
import { Link } from 'react-router-dom'
import SolarServicesImg2 from "../assets/images/services-page/solar-services-img2.jpg";
import SolarServicesImg3 from "../assets/images/services-page/solar-services-img3.jpg";
import SolarServicesImg4 from "../assets/images/services-page/solar-services-img4.jpg";
import PlumbingServicesImg5 from "../assets/images/services-page/plumbing-services-img5.png";
import RightArrowShort from "../assets/images/svg/right-arrow-short.svg";
import FooterLogo from "../assets/images/svg/footer-logo.svg";
import RightArrowSvg from "../assets/images/svg/right-arrow-svg.svg";
import Brochure from "../assets/images/svg/brochure.svg";
import Brochure2 from "../assets/images/svg/brochure2.svg";
import FreeContact from '../components/FreeContact.jsx';
import ProjectSection from '../components/ProjectSection.jsx';

const SolarService = () => {
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="solar-service-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Solar Service</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Services"> SERVICES /</Link>
                            <Link to="/SolarService">Solar</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Two ===================================== --> */}
            <section className="section-eight" id="services-page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <h2 className="handyman-text fade_down pt-0">Adipiscing iaculis iaculis enim enim magna sociis morbi
                                interdum varius.</h2>
                            <p className="fusce fade_down">Volutpat et malesuada maecenas amet. Ultrices volutpat auctor
                                euismod eget pulvinar nulla porttitor. Faucibus faucibus consectetur et tellus magnis. Nunc
                                proin mauris enim duis aliquet fringilla. Erat semper amet turpis cursus. Vel tellus tellus
                                risus eu lacus volutpat morbi. Cursus tincidunt urna condimentum egestas integer.
                            </p>
                            <img className="plumbing-services-img2 img-animation-style4 reveal"
                                src={SolarServicesImg2} alt="solar-services-img2" />
                            <p className="fusce fade_down mt-0">Purus auctor eu rhoncus mi enim facilisi. In suspendisse libero
                                suspendisse lacinia vulputate faucibus fusce. Blandit ultrices morbi eu rhoncus amet at.
                                Placerat in mi id dolor odio nulla. Feugiat in volutpat iaculis sit. Tincidunt gravida enim eget
                                arcu turpis sed nunc metus est. Purus sed elementum tristique sit malesuada sagittis odio. Ipsum
                                dolor enim nulla sed nulla dignissim. Tincidunt quam tellus vitae hac scelerisque massa.
                                Condimentum sit interdum eget vel congue egestas pretium.
                            </p>
                            <h2 className="interdum fade_down">Adipiscing iaculis iaculis enim enim magna sociis morbi interdum
                                varius.</h2>
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
                                    <li>Condimentum orci consectetur risus vel vitae sit ipsum eu amet. Elit risus scelerisque
                                        sit semper.</li>
                                    <li>Eu faucibus at diam pellentesque tortor bibendum nec ullamcorper.</li>
                                </ul>
                            </div>
                            <div className="plumbing-grid img-animation-style1 reveal">
                                <img src={SolarServicesImg3} alt="solar-services-img3" />
                                <img src={SolarServicesImg4} alt="solar-services-img4" />
                            </div>
                            <h2 className="interdum fade_down">Ipsum eget non faucibus platea vel euismod dui ut.</h2>
                            <p className="fusce fade_down">Fames egestas vitae habitant blandit volutpat. Mi maecenas quam eu quis
                                maecenas. Maecenas tortor et vitae odio gravida. Porta nunc feugiat tortor lectus. Urna
                                hendrerit varius nulla odio neque amet. Felis id tortor in quis ipsum libero. Risus dolor
                                adipiscing purus nam bibendum sit nunc pharetra purus. Nam aliquam enim nulla amet.
                            </p>
                            <div className="accordion plumbing-services-accor fade_down" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How often should I have my plumbing inspected?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                            ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                            Augue neque gravida in fermentum et sollicitudin.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            In ut odio praesent tortor lectus non. Morbi placerat eget suspendisse vel?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                            ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                            Augue neque gravida in fermentum et sollicitudin.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Sed elementum fames sit turpis feugiat eget amet. Auctor scelerisque sit proin duis
                                            id?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                            ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                            Augue neque gravida in fermentum et sollicitudin.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Nulla molestie dis odio ultricies a nec suscipit at sed?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                            ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                            Augue neque gravida in fermentum et sollicitudin.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                            <div className="single-services-black-box">
                                <h3>Our Services</h3>
                            </div>
                            <div className="single-services-sub-box">
                                <ul>
                                    <li className="pt-0">
                                        <Link to="/PlumbingService">Plumbing Solutions
                                            <img src={RightArrowShort} alt="right-arrow-short" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/RoofingService">Roofing Solutions
                                            <img src={RightArrowShort} alt="right-arrow-short" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/CarpentryService">Carpentry Solutions
                                            <img src={RightArrowShort} alt="right-arrow-short" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/CleaningService">Cleaning Solutions
                                            <img src={RightArrowShort} alt="right-arrow-short" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/AirConditionService">Air Condition Solutions
                                            <img src={RightArrowShort} alt="right-arrow-short" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/PaintingService">Painting Solutions
                                            <img src={RightArrowShort} alt="right-arrow-short" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ElectricalService" >Electrical Solutions
                                            <img src={RightArrowShort} alt="right-arrow-short" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/SolarService" className="current-page-active">Solar Solutions
                                            <img src={RightArrowShort} alt="right-arrow-short" />
                                        </Link>
                                    </li>
                                    <li className="pb-0 border-bottom-0">
                                        <Link to="/WeldingService">Welding Solutions
                                            <img src={RightArrowShort} alt="right-arrow-short" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="ad-box">
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
                                <img className="plumbing-services-img5" src={PlumbingServicesImg5} alt="plumbing-services-img5" />
                            </div>
                            <div className="documents-box">
                                <Link to="#" className="brochure-main">
                                    <div className="brochure">
                                        <img src={Brochure} alt="brochure" />
                                    </div>
                                    <h3>Download Brochure</h3>
                                </Link>
                                <Link to="#" className="brochure-main mb-0">
                                    <div className="brochure">
                                        <img src={Brochure2} alt="brochure2" />
                                    </div>
                                    <h3>Download Company Profile</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==================== Section Three ===================== --> */}
            <section className="section-seven">
                <FreeContact />
            </section>
            {/* <!-- ==================== Section Four ===================== --> */}
            <section className="section-six ProjectSection">
                <ProjectSection />
            </section>
        </div>
    )
}
export default SolarService