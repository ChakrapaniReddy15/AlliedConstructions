import React, { useEffect, useState } from "react";
import LoaderGif from '../assets/images/home-page/loader.gif';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;
    return (
        <div>
            {/* <!-- ====================================== Preloader ===================================== --> */}
            <div className="page-loader">
                <img src={LoaderGif} alt="loader" />
                <div className="loading">
                    <span>A</span>
                    <span>L</span>
                    <span>L</span>
                    <span>I</span>
                    <span>E</span>
                    <span>D</span>
                </div>
                <div className="loading loading-subtitle">
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>S</span>
                    <span>T</span>
                    <span>R</span>
                    <span>U</span>
                    <span>C</span>
                    <span>T</span>
                    <span>I</span>
                    <span>O</span>
                    <span>N</span>
                </div>
            </div>
        </div>
    )
}

export default Loader
