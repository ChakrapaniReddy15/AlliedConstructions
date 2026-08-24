import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import EmailImg from '../assets/images/svg/email.svg';
// import LocationImg from '../assets/images/svg/location.svg';
import FacebookImg from '../assets/images/svg/facebook.svg';
import InstaImg from '../assets/images/svg/insta.svg';
import LinkdienImg from '../assets/images/svg/linkdien.svg';
import LogoSvg from '../assets/images/svg/Allied-Construction-Logo.svg';
import FooterLogoImg from '../assets/images/svg/Allied-Construction-Logo.svg';
import XImg from '../assets/images/svg/x.svg';
import HeadphoneSvg from '../assets/images/svg/headphone.svg';
import SideMenu from '../assets/images/svg/menu.svg';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen((v) => !v);
    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Close menu/dropdowns when clicking outside
    useEffect(() => {
        const handleDocClick = (e) => {
            if (!menuRef.current) return;
            if (!menuRef.current.contains(e.target)) {
                // clicked outside the menu
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleDocClick);
        return () => document.removeEventListener("mousedown", handleDocClick);
    }, []);

    // Close side menu / dropdowns on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            {/* <!-- ======================== Header ============================ --> */}
            <header className="header">
                {/* small header */}
                <div className="small-header">
                    <div className="container small-header-sub-main">
                        <div className="small-header-sub">
                            <a href="mailto:alliedconstructionshyd@gmail.com">
                                <p><img src={EmailImg} alt="email" />alliedconstructionshyd@gmail.com</p>
                            </a>
                        </div>
                        <div className="small-header-media-main">
                            <a
                                href="https://www.facebook.com/profile.php?id=61585741507466#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={FacebookImg} alt="facebook" />
                            </a>
                            <a
                                href="https://www.instagram.com/allied_constructions_hyd/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={InstaImg} alt="insta" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/allied-construction-hyd-78bbb03a3/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={LinkdienImg} alt="linkedin" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* main header */}
                <div className="container header-sub">
                    <div className="logo">
                        <Link to="/"><img src={LogoSvg} style={{ height: '60px' }} alt="logo" /></Link>
                    </div>

                    {/* overlay */}
                    <div className={`menuOverlay ${menuOpen ? "active" : ""}`} style={{ backgroundColor: '#FFF' }} onClick={closeMenu} />

                    {/* side menu */}
                    <nav ref={menuRef} className={`menu ${menuOpen ? "active" : ""}`}>
                        <div className="side-menu-logo">
                            <Link to="/"><img src={FooterLogoImg} style={{ height: '70px' }} alt="logo" /></Link>
                            <button className="close-menu" onClick={closeMenu} aria-label="Close menu">
                                <img src={XImg} alt="close" />
                            </button>
                        </div>

                        <ul className="menu-list">
                            <li className={`wrapper wrapper-men ${location.pathname === "/" ? "active" : ""}`}>
                                <Link to="/" className="menu-text">
                                    Home
                                </Link>
                            </li>
                            <li className={`wrapper wrapper-men ${location.pathname === "/About" ? "active" : ""}`}>
                                <Link to="/About" className="menu-text">
                                    About Us
                                </Link>
                            </li>
                            <li className={`wrapper wrapper-men ${location.pathname === "/Team" ? "active" : ""}`}>
                                <Link to="/Team" className="menu-text">
                                    Our Team
                                </Link>
                            </li>
                            <li className={`wrapper wrapper-men ${location.pathname.startsWith("/Projects") ? "active" : ""}`}>
                                <Link to="/Projects" className="menu-text">
                                    Projects
                                </Link>
                            </li>
                            <li className={`wrapper wrapper-men ${location.pathname === "/Services" ? "active" : ""}`}>
                                <Link to="/Services" className="menu-text">
                                    Services
                                </Link>
                            </li>
                            <li className={`wrapper wrapper-men ${location.pathname === "/FaqPage" ? "active" : ""}`}>
                                <Link to="/FaqPage" className="menu-text">
                                    FAQs
                                </Link>
                            </li>
                            <li className={`wrapper wrapper-men ${location.pathname === "/Contact" ? "active" : ""}`}>
                                <Link to="/Contact" className="menu-text">
                                    Contact Us
                                </Link>
                            </li>

                        </ul>
                        <div className="side-menu-footer">
                            <a
                                href="https://www.facebook.com/profile.php?id=61585741507466#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={FacebookImg} alt="facebook" />
                            </a>
                            <a
                                href="https://www.instagram.com/allied_constructions_hyd/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={InstaImg} alt="insta" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/allied-construction-hyd-78bbb03a3/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={LinkdienImg} alt="linkedin" />
                            </a>
                        </div>
                    </nav>

                    <div className="contact">
                        <div className="icon"><img src={HeadphoneSvg} alt="phone" /></div>
                        <div className="call-info">
                            <p>Call Us</p>
                            <Link to="tel:+919347111242">+91-9347111242</Link>
                        </div>
                    </div>

                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Open menu">
                        <img src={SideMenu} alt="menu" />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
