import React from 'react'
import registerImg from '../assets/images/svg/register.svg';
import inspectImg from '../assets/images/svg/inspect.svg';
import workProcessImg from '../assets/images/svg/workProcess.svg';
import handoverImg from '../assets/images/svg/handover.svg';

const OurProcess = () => {
    return (
        <>
            <section className="section-five" >
                <div className="container">
                    <div className="quality-main ourProcess fade_down">
                        <p className="quality">our process</p>
                    </div>
                    <h2 className="alliedconstruction-text quick fade_down">Easy quick following steps</h2>
                    <p className="fusce malesuada elementum fade_down">
                        Our streamlined process ensures clarity, quality, and timely delivery—from initial consultation
                        and design planning to construction execution and final handover.
                    </p>
                    <div className="row step-box-row">
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <div className="steps-box-main flip_left">
                                <div className="number-circel">1</div>
                                <div className="steps-box">
                                    <div className="register-img-main">
                                        <img className="register" src={registerImg} alt="register" />
                                    </div>
                                    <h2 className="Register-text">Project Consultation</h2>
                                    <p className="proin">
                                        We begin by understanding your requirements, site conditions, and budget to define the project
                                        scope, layout expectations, and design direction.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <div className="steps-box-main flip_left">
                                <div className="number-circel">2</div>
                                <div className="steps-box">
                                    <div className="register-img-main">
                                        <img className="register" src={inspectImg} alt="inspect" />
                                    </div>
                                    <h2 className="Register-text">Site Planning</h2>
                                    <p className="proin">
                                        Our experts assess the site, prepare architectural concepts, and finalize layouts while ensuring
                                        compliance with safety standards and regulations.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <div className="steps-box-main flip_left">
                                <div className="number-circel">3</div>
                                <div className="steps-box">
                                    <div className="register-img-main">
                                        <img className="register" src={workProcessImg} alt="workProcess" />
                                    </div>
                                    <h2 className="Register-text">Build Execution</h2>
                                    <p className="proin">
                                        With approved designs in place, our team executes construction and interior work using quality
                                        materials, skilled craftsmanship, and continuous supervision.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <div className="steps-box-main flip_left">
                                <div className="number-circel">4</div>
                                <div className="steps-box">
                                    <div className="register-img-main">
                                        <img className="register" src={handoverImg} alt="handover" />
                                    </div>
                                    <h2 className="Register-text">Final Handover</h2>
                                    <p className="proin">
                                        We complete final quality checks, ensure all details meet expectations, and hand over the project
                                        ready for immediate use with complete satisfaction.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurProcess