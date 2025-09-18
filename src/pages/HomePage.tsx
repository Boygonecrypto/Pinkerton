import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Gallery from '../components/Gallery';
import QuoteCalculator from '../components/QuoteCalculator';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <QuoteCalculator />
      <ContactForm />
      <ServicesSection />
      <WhyChooseUs />
      <Gallery />
      <TestimonialsCarousel />
      <Footer />
    </>
  );
};

export default HomePage;
