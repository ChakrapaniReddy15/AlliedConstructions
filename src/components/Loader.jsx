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
                    <span>H</span>
                    <span>A</span>
                    <span>N</span>
                    <span>D</span>
                    <span>Y</span>
                    <span>M</span>
                    <span>A</span>
                    <span>N</span>
                </div>
            </div>
        </div>
    )
}

export default Loader