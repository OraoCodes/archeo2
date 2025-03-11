import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-white/90 backdrop-blur shadow-sm' : 'py-5 bg-transparent'
    }`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/830ca3f1-695b-4953-90b1-be9d995f341c.png" 
            alt="Archeohub Logo" 
            className="h-[7.2rem] w-auto -my-6"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-sm font-medium text-archeohub-dark hover:text-archeohub-primary transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('why-us')} 
            className="text-sm font-medium text-archeohub-dark hover:text-archeohub-primary transition-colors"
          >
            Why Choose Us
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-sm font-medium text-archeohub-dark hover:text-archeohub-primary transition-colors"
          >
            Pricing
          </button>
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-1 button-primary"
          >
            <span>Book a Free Consult</span>
            <ChevronRight size={16} className="text-white" />
          </a>
        </nav>
        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="md:hidden button-primary">
          <span className="flex items-center">
            Book Now
            <ChevronRight size={16} className="ml-1 text-white" />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
