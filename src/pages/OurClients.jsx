import React from 'react'
import ClientImg1 from '../assets/images/clients-page/client-img1.jpg';
import ClientImg2 from '../assets/images/clients-page/client-img2.jpg';
import ClientImg3 from '../assets/images/clients-page/client-img3.jpg';
import ClientImg4 from '../assets/images/clients-page/client-img4.jpg';
import ClientImg5 from '../assets/images/clients-page/client-img5.jpg';
import ClientImg6 from '../assets/images/clients-page/client-img6.jpg';
import ClientImg7 from '../assets/images/clients-page/client-img7.jpg';
import ClientImg8 from '../assets/images/clients-page/client-img8.jpg';
import ClientImg9 from '../assets/images/clients-page/client-img9.jpg';
import ClientImg10 from '../assets/images/clients-page/client-img10.jpg';
import ClientImg11 from '../assets/images/clients-page/client-img11.jpg';
import ClientImg12 from '../assets/images/clients-page/client-img12.jpg';
import ClientImg13 from '../assets/images/clients-page/client-img13.jpg';
import ClientImg14 from '../assets/images/clients-page/client-img14.jpg';
import ClientImg15 from '../assets/images/clients-page/client-img15.jpg';
import ClientImg16 from '../assets/images/clients-page/client-img16.jpg';
import ClientImg17 from '../assets/images/clients-page/client-img17.jpg';
import ClientImg18 from '../assets/images/clients-page/client-img18.jpg';
import { Link } from 'react-router-dom';
import TopRated from '../components/TopRated.jsx';
import Faq from '../components/Faq.jsx';

const OurClients = () => {
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="our-client-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">Our Clients</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/OurClients">Our Clients</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="quality-main ourProcess fade_down">
                        <p className="quality">HOME RAKSHAK</p>
                    </div>
                    <h2 className="handyman-text legal fade_down">Our valuable customers</h2>
                    <p className="fusce iaculis fade_down">Morbi iaculis velit amet lectus cras tincidunt eu. Pulvinar fermentum
                        erat ultrices a morbi ac felis ac dignissim.
                    </p>
                    <div className="clients-main">
                        <img className="flip_left" src={ClientImg1} alt="client-img1" />
                        <img className="flip_left" src={ClientImg2} alt="client-img2" />
                        <img className="flip_left" src={ClientImg3} alt="client-img3" />
                        <img className="flip_left" src={ClientImg4} alt="client-img4" />
                        <img className="flip_left" src={ClientImg5} alt="client-img5" />
                        <img className="flip_left" src={ClientImg6} alt="client-img6" />
                        <img className="flip_left" src={ClientImg7} alt="client-img7" />
                        <img className="flip_left" src={ClientImg8} alt="client-img8" />
                        <img className="flip_left" src={ClientImg9} alt="client-img9" />
                        <img className="flip_left" src={ClientImg10} alt="client-img10" />
                        <img className="flip_left" src={ClientImg11} alt="client-img11" />
                        <img className="flip_left" src={ClientImg12} alt="client-img12" />
                        <img className="flip_left" src={ClientImg13} alt="client-img13" />
                        <img className="flip_left" src={ClientImg14} alt="client-img14" />
                        <img className="flip_left" src={ClientImg15} alt="client-img15" />
                        <img className="flip_left" src={ClientImg16} alt="client-img16" />
                        <img className="flip_left" src={ClientImg17} alt="client-img17" />
                        <img className="flip_left" src={ClientImg18} alt="client-img18" />
                    </div>
                </div>
            </section>
            {/* <!-- =============== Section Nine ================ --> */}
            <section className="curved-section">
                <TopRated />
            </section>
            {/* <!-- ================= REPAIR & INSTALLATION =================== --> */}
            <section className="installation-section pt-0">
                <Faq />
            </section>
        </div>
    )
}

export default OurClients





