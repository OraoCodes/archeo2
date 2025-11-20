
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonial from '../components/Testimonial';
import HomeCTA from '../components/HomeCTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Archeohub - Build Better Teams. Become a Better Candidate.";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <WhyChooseUs />
        <Testimonial />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
