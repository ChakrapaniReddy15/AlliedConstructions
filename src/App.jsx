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
import Testimonials from './pages/Testimonials.jsx';
import FaqPage from './pages/FaqPage.jsx';
import Services from './pages/Services.jsx';
import NotFound from './pages/NotFound.jsx';
import PlumbingService from './pages/PlumbingService.jsx';
import RoofingService from './pages/RoofingService.jsx';
import CarpentryService from './pages/CarpentryService.jsx';
import PaintingService from './pages/PaintingService.jsx';
import ElectricalService from './pages/ElectricalService.jsx';
import SolarService from './pages/SolarService.jsx';
import WeldingService from './pages/WeldingService.jsx';
import Projects from './features/projects/Projects.jsx';
import ProjectDetail from './features/projects/ProjectDetail.jsx';
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
          <Route path="/Projects/:slug" element={
            <MainLayout>
              <ProjectDetail />
            </MainLayout>
          }
          />
          <Route path="/Contact" element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
