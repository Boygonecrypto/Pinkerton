import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResidentialRemodelingPage from './pages/services/ResidentialRemodelingPage';
import CommercialConstructionPage from './pages/services/CommercialConstructionPage';
import KitchenRenovationPage from './pages/services/KitchenRenovationPage';
import BathroomRemodelingPage from './pages/services/BathroomRemodelingPage';
import RoofRepairPage from './pages/services/RoofRepairPage';
import HomeAdditionsPage from './pages/services/HomeAdditionsPage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Global page entrance animation
    gsap.fromTo(
      "body",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    // Smooth scroll behavior
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/residential-remodeling" element={<ResidentialRemodelingPage />} />
          <Route path="/services/commercial-construction" element={<CommercialConstructionPage />} />
          <Route path="/services/kitchen-renovation" element={<KitchenRenovationPage />} />
          <Route path="/services/bathroom-remodeling" element={<BathroomRemodelingPage />} />
          <Route path="/services/roof-repair" element={<RoofRepairPage />} />
          <Route path="/services/home-additions" element={<HomeAdditionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
