import React from "react";
import BottomToTop from "../components/BottomToTop.jsx";
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Loader from '../components/Loader.jsx';

const MainLayout = ({ children }) => {
    return (
        <>
            <Loader />
            <Header />
            {children}
            <Footer />
            <BottomToTop />
        </>
    );
};

export default MainLayout;
