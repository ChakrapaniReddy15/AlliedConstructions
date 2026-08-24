import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug, projects } from './projectData.js';
import NotFound from '../../pages/NotFound.jsx';
import RightArrowSvg from '../../assets/images/svg/right-arrow-svg.svg';

const ProjectDetail = () => {
    const { slug } = useParams();
    const [previewImage, setPreviewImage] = useState(null);
    const project = getProjectBySlug(slug);

    useEffect(() => {
        setPreviewImage(null);
    }, [slug]);

    useEffect(() => {
        if (!previewImage) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setPreviewImage(null);
            }
        };

        document.body.classList.add('project-preview-open');
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.classList.remove('project-preview-open');
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [previewImage]);

    if (!project) {
        return <NotFound />;
    }

    const headerStyle = {
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.90) 27.86%, rgba(0, 0, 0, 0.00) 100%), url(${project.banner})`,
    };

    return (
        <div>
            <section className="section-one">
                <div className="page-img-header" style={headerStyle}>
                    <div className="container">
                        <h1 className="img-header-text fade_down">{project.title}</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Projects"> PROJECTS /</Link>
                            <Link to={`/Projects/${project.slug}`}> {project.title}</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-eight project-detail-section">
                <div className="container">
                    <div className="row project-detail-row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <img className="project-detail-main-img fade_down" src={project.gallery[0]} alt={project.title} />
                            <div className="quality-main about-qulity-main fade_down">
                                <p className="quality">{project.category}</p>
                            </div>
                            <h2 className="alliedconstruction-text fade_down">{project.title}</h2>
                            <p className="fusce fade_down">{project.overview}</p>
                            <h2 className="interdum fade_down">Work Completed</h2>
                            <div className="plan-body plumbing-body-list fade_down">
                                <ul>
                                    {project.scope.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <h2 className="interdum fade_down">Project Highlights</h2>
                            <div className="plan-body plumbing-body-list fade_down">
                                <ul>
                                    {project.highlights.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <h2 className="interdum fade_down">Our Approach</h2>
                            <p className="fusce fade_down">{project.approach}</p>
                            <div className="project-detail-gallery img-animation-style1 reveal">
                                {project.gallery.slice(1).map((image, index) => (
                                    <button
                                        className="project-gallery-preview-btn"
                                        key={image}
                                        onClick={() => setPreviewImage(image)}
                                        type="button"
                                        aria-label={`Preview ${project.title} gallery image ${index + 1}`}
                                    >
                                        <img src={image} alt={`${project.title} gallery ${index + 1}`} />
                                    </button>
                                ))}
                            </div>
                            <h2 className="interdum fade_down">Project Outcome</h2>
                            <p className="fusce project-outcome-text fade_down">{project.outcome}</p>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="project-detail-box fade_down">
                                <div className="Category-main">
                                    <h2>Category</h2>
                                    <p>{project.category}</p>
                                </div>
                                <div className="Category-main">
                                    <h2>Location</h2>
                                    <p>{project.location}</p>
                                </div>
                                <div className="Category-main">
                                    <h2>Status</h2>
                                    <p>{project.status}</p>
                                </div>
                                <div className="Category-main border-bottom-0">
                                    <h2>Timeline</h2>
                                    <p>{project.duration}</p>
                                </div>
                            </div>
                            <div className="single-services-black-box">
                                <h3>Other Projects</h3>
                            </div>
                            <div className="single-services-sub-box project-detail-links">
                                <ul>
                                    {projects.filter((item) => item.slug !== project.slug).slice(0, 5).map((item) => (
                                        <li key={item.slug}>
                                            <Link to={`/Projects/${item.slug}`}>{item.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ad-box">
                                <h3 className="frist-services">Have a similar project in mind?</h3>
                                <div className="testimonials-btn mt-0" id="ad-btn">
                                    <Link to="/Contact" className="btn-main btn1">Contact Us
                                        <span className="arrow-section">
                                            <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                        </span>
                                        <div className="btn-box-left btn1"></div>
                                        <div className="btn-box-right btn1"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {previewImage && (
                <div className="project-image-preview" role="dialog" aria-modal="true" aria-label={`${project.title} image preview`}>
                    <button className="project-image-preview-backdrop" onClick={() => setPreviewImage(null)} type="button" aria-label="Close preview"></button>
                    <div className="project-image-preview-content">
                        <button className="project-image-preview-close" onClick={() => setPreviewImage(null)} type="button" aria-label="Close preview">x</button>
                        <img src={previewImage} alt={`${project.title} preview`} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;
