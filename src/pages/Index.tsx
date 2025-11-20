
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import WhyChooseUs from '../components/WhyChooseUs';
import HomeCTA from '../components/HomeCTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Archeohub - Hire Fast. Hire Right.";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <WhyChooseUs />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
