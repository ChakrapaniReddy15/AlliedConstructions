import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/swap.css';
import './assets/css/slick.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/media_query.css';
import MainLayout from './components/MainLayout.jsx';
import ScrollTop from './components/ScrollTop.jsx'
import Home from './pages/Home3.jsx';
import About from './pages/About.jsx';
import Team from './pages/Team.jsx';
import SingleTeam from './pages/SingleTeam.jsx';
import PricingPlan from './pages/PricingPlan.jsx';
import GetQuote from './pages/GetQuote.jsx';
import OurClients from './pages/OurClients.jsx';
import Testimonials from './pages/Testimonials.jsx';
import FaqPage from './pages/FaqPage.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import Services from './pages/Services.jsx';
import NotFound from './pages/NotFound.jsx';
import PlumbingService from './pages/PlumbingService.jsx';
import RoofingService from './pages/RoofingService.jsx';
import CarpentryService from './pages/CarpentryService.jsx';
import CleaningService from './pages/CleaningService.jsx';
import AirConditionService from './pages/AirConditionService.jsx';
import PaintingService from './pages/PaintingService.jsx';
import ElectricalService from './pages/ElectricalService.jsx';
import SolarService from './pages/SolarService.jsx';
import WeldingService from './pages/WeldingService.jsx';
import Projects from './pages/Projects.jsx';
import Projects2 from './pages/Projects2.jsx';
import SingleProject from './pages/SingleProject.jsx';
import SingleProject2 from './pages/SingleProject2.jsx';
import SingleProject3 from './pages/SingleProject3.jsx';
import OurBlog from './pages/OurBlog.jsx';
import Blog2 from './pages/Blog2.jsx';
import Blog3 from './pages/Blog3.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import SingleBlog2 from './pages/SingleBlog2.jsx';
import SingleBlog3 from './pages/SingleBlog3.jsx';
import Contact from './pages/Contact.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          {/* Pages with header & footer */}
          <Route path="/" element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
          />
          <Route path="/About" element={
            <MainLayout>
              <About />
            </MainLayout>
          }
          />
          <Route path="/Team" element={
            <MainLayout>
              <Team />
            </MainLayout>
          }
          />
          <Route path="/SingleTeam" element={
            <MainLayout>
              <SingleTeam />
            </MainLayout>
          }
          />
          <Route path="/PricingPlan" element={
            <MainLayout>
              <PricingPlan />
            </MainLayout>
          }
          />
          <Route path="/GetQuote" element={
            <MainLayout>
              <GetQuote />
            </MainLayout>
          }
          />
          <Route path="/OurClients" element={
            <MainLayout>
              <OurClients />
            </MainLayout>
          }
          />
          <Route path="/Testimonials" element={
            <MainLayout>
              <Testimonials />
            </MainLayout>
          }
          />
          <Route path="/FaqPage" element={
            <MainLayout>
              <FaqPage />
            </MainLayout>
          }
          />
          <Route path="*" element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
          />
          <Route path="/Services" element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
          />
          <Route path="/PlumbingService" element={
            <MainLayout>
              <PlumbingService />
            </MainLayout>
          }
          />
          <Route path="/RoofingService" element={
            <MainLayout>
              <RoofingService />
            </MainLayout>
          }
          />
          <Route path="/CarpentryService" element={
            <MainLayout>
              <CarpentryService />
            </MainLayout>
          }
          />
          <Route path="/CleaningService" element={
            <MainLayout>
              <CleaningService />
            </MainLayout>
          }
          />
          <Route path="/AirConditionService" element={
            <MainLayout>
              <AirConditionService />
            </MainLayout>
          }
          />
          <Route path="/PaintingService" element={
            <MainLayout>
              <PaintingService />
            </MainLayout>
          }
          />
          <Route path="/ElectricalService" element={
            <MainLayout>
              <ElectricalService />
            </MainLayout>
          }
          />
          <Route path="/SolarService" element={
            <MainLayout>
              <SolarService />
            </MainLayout>
          }
          />
          <Route path="/WeldingService" element={
            <MainLayout>
              <WeldingService />
            </MainLayout>
          }
          />
          <Route path="/Projects" element={
            <MainLayout>
              <Projects />
            </MainLayout>
          }
          />
          <Route path="/Projects2" element={
            <MainLayout>
              <Projects2 />
            </MainLayout>
          }
          />
          <Route path="/SingleProject" element={
            <MainLayout>
              <SingleProject />
            </MainLayout>
          }
          />
          <Route path="/SingleProject2" element={
            <MainLayout>
              <SingleProject2 />
            </MainLayout>
          }
          />
          <Route path="/SingleProject3" element={
            <MainLayout>
              <SingleProject3 />
            </MainLayout>
          }
          />
          <Route path="/OurBlog" element={
            <MainLayout>
              <OurBlog />
            </MainLayout>
          }
          />
          <Route path="/Blog2" element={
            <MainLayout>
              <Blog2 />
            </MainLayout>
          }
          />
          <Route path="/Blog3" element={
            <MainLayout>
              <Blog3 />
            </MainLayout>
          }
          />
          <Route path="/SingleBlog" element={
            <MainLayout>
              <SingleBlog />
            </MainLayout>
          }
          />
          <Route path="/SingleBlog2" element={
            <MainLayout>
              <SingleBlog2 />
            </MainLayout>
          }
          />
          <Route path="/SingleBlog3" element={
            <MainLayout>
              <SingleBlog3 />
            </MainLayout>
          }
          />
          <Route path="/Contact" element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
          />
          {/* Pages WITHOUT header/footer */}
          <Route path="/ComingSoon" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
