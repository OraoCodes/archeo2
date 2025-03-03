
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from '../components/Pricing';
import Testimonial from '../components/Testimonial';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Archeohub - Hire Senior Engineers Risk-Free";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Pricing />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
