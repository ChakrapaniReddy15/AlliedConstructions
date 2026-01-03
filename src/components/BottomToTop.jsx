import React, { useState, useEffect } from "react";
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';

const BottomToTop = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let throttleTimeout = null;

        const handleScroll = () => {
            if (throttleTimeout) return;
            throttleTimeout = setTimeout(() => {
                const scrollY = window.pageYOffset;

                // ---- BottomToTop logic ----
                setIsVisible(scrollY > 100);

                // ---- GlobalScrollReveal logic ----
                const reveals = document.querySelectorAll(".reveal");
                const windowHeight = window.innerHeight;
                const elementVisible = 150;

                reveals.forEach((el) => {
                    const elementTop = el.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        el.classList.add("active");
                    } else {
                        el.classList.remove("active");
                    }
                });

                throttleTimeout = null;
            }, 100);
        };

        // Run once on mount
        handleScroll();

        // Attach scroll listener
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (throttleTimeout) clearTimeout(throttleTimeout);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {children}
            {isVisible && (
                <button className="bottom-top-button" onClick={scrollToTop}>
                    <img src={RightArrowSvg} alt="arrow-up" />
                </button>
            )}
        </div>
    )
}

export default BottomToTop