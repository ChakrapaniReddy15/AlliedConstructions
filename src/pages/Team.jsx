import React from 'react'
import { Link } from 'react-router-dom'
import TeamImg1 from '../assets/images/team-page/Founder.jpeg'
import TeamImg2 from '../assets/images/team-page/team-img2.jpg'
import TeamImg3 from '../assets/images/team-page/team-img3.jpg'
import TeamImg4 from '../assets/images/team-page/team-img4.jpg'

const directors = [
    {
        initials: 'MAA',
        name: 'Mohammed Ali Aijaaz',
        photo: TeamImg1,
        role: 'Founder & Managing Partner',
        credential: 'B.E. Civil Engineering | Founder & Managing Partner',
        facts: [
            ['Academic background', 'B.E. Civil Engineering'],
            ['Leadership role', 'Founder, managing partner, and project development lead'],
            ['Core focus', 'Land development, planning, construction, execution, and completion'],
        ],
        tags: ['Construction Planning', 'Project Development', 'Execution', 'Customer Trust'],
        bio: 'Mohammed Ali Aijaaz is the Founder and Managing Partner of Allied Constructions, with extensive international and domestic experience in construction and project development. With a strong technical background in civil engineering, he has handled projects from concept and planning to land development, construction, execution, and completion. His experience covers residential communities, apartments, institutional buildings, housing projects, resorts, and farm developments. His approach combines technical expertise, practical project management, quality construction, and transparent customer dealings.',
    },
    {
        initials: 'AF',
        name: 'Afreen Fatima',
        photo: TeamImg2,
        role: 'Co-Founder & Partner',
        credential: 'MBA | Co-Founder & Partner',
        facts: [
            ['Academic background', 'MBA'],
            ['Leadership role', 'Business administration, management, and organisational operations'],
            ['Core focus', 'Funds management, marketing, coordination, and company growth'],
        ],
        tags: ['Administration', 'Management', 'Marketing', 'Financial Coordination'],
        bio: 'Afreen Fatima is the Co-Founder and Partner of Allied Constructions, bringing professional experience in business administration, management, marketing, and financial coordination. She has played an important role in the company\'s administration, funds management, marketing, and organisational operations, supporting the company\'s growth and professional management over the years. Together, the founders have built Allied Constructions on trust, transparency, quality, and long-term relationships.',
    },
    {
        initials: 'AVS',
        name: 'Mr. A.V. Santhosh Kumar',
        photo: TeamImg3,
        role: 'Director - Projects & Operations',
        credential: 'Civil Engineer with 28 years of experience',
        facts: [
            ['Academic background', 'Civil Engineering'],
            ['Leadership role', 'Project operations, execution, and site delivery'],
            ['Core focus', 'Planning, resources, quality checks, and handover'],
        ],
        tags: ['Project Execution', 'Operations', 'Site Management', 'Quality Control'],
        bio: 'Mr. A.V. Santhosh Kumar leads project planning, site execution, team coordination, and delivery control. His experience helps Allied Constructions manage work with clear schedules, practical decisions, and strong attention to quality. He works closely with site teams, vendors, and clients to keep every stage of construction moving in the right direction.',
    },
    {
        initials: 'SK',
        name: 'Mr. Shayeebullah Khan',
        photo: TeamImg4,
        role: 'Director - Structural Engineering',
        credential: 'B.E. Civil and structural engineering specialist',
        facts: [
            ['Academic background', 'B.E. Civil Engineering'],
            ['Leadership role', 'Structural design review and technical guidance'],
            ['Core focus', 'RCC design, steel design, safety checks, and site support'],
        ],
        tags: ['Structural Design', 'RCC & Steel', 'Safety Review', 'Code Guidance'],
        bio: 'Mr. Shayeebullah Khan guides the structural side of Allied Constructions. His work focuses on safe design, practical engineering, and proper review before execution. He helps the team check drawings, structural details, and site conditions so each project is built with strength, safety, and long-term use in mind.',
    },
]

const governanceSteps = [
    ['01', 'Project planning review', 'Requirements, drawings, budget, and site conditions are reviewed before work begins.'],
    ['02', 'Design and structure check', 'Important civil and structural details are checked for safety and buildability.'],
    ['03', 'Site quality checks', 'Site progress, material use, and workmanship are reviewed during key stages.'],
    ['04', 'Clear client updates', 'Clients receive practical updates on progress, next steps, and important decisions.'],
]

const Team = () => {
    return (
        <div>
            <section className="section-one">
                <div className="page-img-header" id="team-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Our Team</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/Team">TEAM</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="board-intro-section">
                <div className="container">
                    <div className="quality-main about-qulity-main fade_down">
                        <p className="quality">LEADERSHIP & GOVERNANCE</p>
                    </div>
                    <div className="board-intro-grid">
                        <div>
                            <h2 className="alliedconstruction-text fade_down">Board of Directors</h2>
                            <p className="board-intro-text fade_down">
                                Allied Constructions is guided by experienced civil engineering leadership. Our directors
                                support every project with practical planning, structural care, site discipline, and clear
                                quality standards.
                            </p>
                        </div>
                        <ul className="board-stats fade_up">
                            <li>
                                <span>28+</span>
                                <p>Years of project execution experience</p>
                            </li>
                            <li>
                                <span>4</span>
                                <p>Leadership profiles guiding the company</p>
                            </li>
                            <li>
                                <span>100%</span>
                                <p>Engineer-led project guidance</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="board-directors-section">
                <div className="container">
                    <div className="board-directors-grid">
                        {directors.map((director) => (
                            <article className="board-card fade_down" key={director.name}>
                                <div className="board-portrait" aria-label={director.name}>
                                    <span>{director.initials}</span>
                                </div>
                                <div className="board-card-body">
                                    <div className="board-profile-head">
                                        {director.photo && (
                                            <img src={director.photo} alt={director.name} />
                                        )}
                                        <div>
                                            <p className="board-role">{director.role}</p>
                                            <h3>{director.name}</h3>
                                            <p className="board-credential">{director.credential}</p>
                                        </div>
                                    </div>

                                    <div className="board-facts">
                                        {director.facts.map(([label, value]) => (
                                            <div key={label}>
                                                <span>{label}</span>
                                                <p>{value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="board-tags">
                                        {director.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>

                                    <div className="board-bio">
                                        <p className="board-bio-label">Professional biography</p>
                                        <p>{director.bio}</p>
                                    </div>

                                    <div className="board-contact-actions">
                                        <a className="board-btn" href="mailto:alliedconstructionshyd@gmail.com">
                                            Email
                                        </a>
                                        <a className="board-btn board-btn-outline" href="tel:+919347111242">
                                            Direct line
                                        </a>
                                        <a
                                            className="board-btn board-btn-outline"
                                            href="https://www.linkedin.com/in/allied-construction-hyd-78bbb03a3/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="board-governance-section">
                <div className="container">
                    <div className="board-governance-grid">
                        <div>
                            <div className="quality-main about-qulity-main fade_down">
                                <p className="quality">HOW WE WORK</p>
                            </div>
                            <h2 className="alliedconstruction-text fade_down">Engineering guidance for every project</h2>
                            <p className="board-intro-text fade_down">
                                From the first discussion to final handover, our leadership team reviews the important
                                decisions that affect quality, safety, cost, and delivery.
                            </p>
                        </div>
                        <div className="board-step-list">
                            {governanceSteps.map(([number, title, text]) => (
                                <div className="board-step fade_up" key={number}>
                                    <span>{number}</span>
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="board-cta-section">
                <div className="container">
                    <div className="board-cta-box fade_down">
                        <div>
                            <h2>Speak to Allied Constructions</h2>
                            <p>Contact us for construction planning, renovation work, interiors, or structural review support.</p>
                        </div>
                        <div className="board-cta-actions">
                            <Link to="/Contact" className="board-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Team
