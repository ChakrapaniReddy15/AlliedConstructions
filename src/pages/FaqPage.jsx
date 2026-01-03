import React from 'react'
import { Link } from 'react-router-dom'
import Faq from '../components/Faq.jsx'

const FaqPage = () => {
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one">
                <div className="page-img-header" id="faq-bg">
                    <div className="container">
                        <h1 className="img-header-text fade_down">FAQs</h1>
                        <div className="breadcrumb-group fade_up">
                            <Link to="/">HOME / </Link>
                            <Link to="/FaqPage">FAQS</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ================= REPAIR & INSTALLATION =================== --> */}
            <section className="installation-section">
                <Faq />
            </section>
        </div>
    )
}

export default FaqPage