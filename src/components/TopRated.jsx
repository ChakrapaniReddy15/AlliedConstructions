import React from 'react'
import StarSvg from '../assets/images/svg/star.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import ImagePhoto from '../assets/images/home-page/image-Photo.png';
import { Link } from 'react-router-dom';

const TopRated = () => {
    return (
        <div>

            <div className="container">
                <div className="row curved-section-row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 curved-section-col1">
                        <div className="quality-main about-qulity-main fade_down">
                            <p className="quality">TOP RATED</p>
                        </div>
                        <h2 className="alliedconstruction-text alliedconstruction-services fade_down">Highest rated project</h2>
                        <p className="fusce malesuada pharetra fade_down">
                            Our highest rated project shows how clear planning, strong building work, good materials, and neat
                            finishing can come together. The result is a space that looks good, works well, and feels comfortable
                            for everyday use.
                        </p>
                        <div className="trusted-group fade_down">
                            <div className="stat-box">
                                <h3 className="rating-digit">250+</h3>
                                <p className="ratedCustom">Projects Completed</p>
                            </div>
                            <div className="stat-box">
                                <h3 className="rating-digit">15+</h3>
                                <p className="ratedCustom">Years of Experience</p>
                            </div>
                            <div className="stat-box">
                                <h3 className="rating-digit">98%</h3>
                                <p className="ratedCustom">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 image-Photo-main">
                        <img className="image-Photo" src={ImagePhoto} alt="image-Photo" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopRated
