import React from 'react'
import InstallationImg1 from '../assets/images/home-page/installation-img1.jpg';
import InstallationImg2 from '../assets/images/home-page/installation-img2.jpg';

const Faq = () => {
    return (
        <div>
            {/* =========================== Section ARCHITECTURE & CONSTRUCTION FAQ ====================== */}

            <div className="container">
                <div className="row faq-sec-Row">
                    
                    {/* LEFT IMAGE SECTION */}
                    <div className="col-xxl-6 col-xl-6 col-lg-6 installation-img-group">
                        <img
                            className="installation-img1 img-animation-style4 reveal"
                            src={InstallationImg1}
                            alt="construction-layout-planning"
                        />
                        <img
                            className="installation-img2 img-animation-style2 reveal"
                            src={InstallationImg2}
                            alt="interior design work"
                        />
                        <div className="yerOfExperi">
                            <h2>12+</h2>
                            <p>Years of Experience</p>
                        </div>
                    </div>

                    {/* RIGHT CONTENT SECTION */}
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="quality-main about-qulity-main fade_down">
                            <p className="quality">ARCHITECTURE & CONSTRUCTION</p>
                        </div>

                        <h2 className="alliedconstruction-text fade_down">Frequently asked questions</h2>

                        <p className="fusce fade_down">
                            Get clear answers to common questions about layout planning, building design,
                            construction work, and interior finishing. We guide you through every stage
                            of the building process with clarity and confidence.
                        </p>

                        <div className="accordion" id="accordionExample">

                            {/* FAQ 1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        How do you approach layout planning for a project?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Our layout planning starts with understanding your requirements, site
                                        conditions, and budget. We focus on space optimization, natural light,
                                        ventilation, and smooth circulation to create functional and efficient designs.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        What is your architectural and structural design process?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        We combine creative architectural concepts with strong structural planning.
                                        All designs follow approved standards and engineering practices to ensure
                                        safety, strength, and long-lasting use.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        How do you ensure quality during construction?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Quality is ensured through skilled workmanship, certified materials,
                                        regular site checks and strict quality checks at every construction stage.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        Do you offer complete interior design solutions?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Yes, we provide end-to-end interior solutions including space planning,
                                        modular furniture, material selection, lighting design, and quality finishes
                                        that enhance both comfort and aesthetics.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button
                                        className="accordion-button collapsed mb-0"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        Can designs be customized based on budget and preferences?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFive"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Absolutely. Every project is tailored to your budget, lifestyle, and design
                                        preferences. We provide flexible options and transparent guidance without
                                        compromising on quality or functionality.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
