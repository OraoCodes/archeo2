
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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-white/90 backdrop-blur shadow-sm' : 'py-5 bg-transparent'
    }`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/830ca3f1-695b-4953-90b1-be9d995f341c.png" 
            alt="Archeohub Logo" 
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-sm font-medium text-archeohub-dark hover:text-archeohub-primary transition-colors">
            How It Works
          </a>
          <a href="#why-us" className="text-sm font-medium text-archeohub-dark hover:text-archeohub-primary transition-colors">
            Why Choose Us
          </a>
          <a href="#pricing" className="text-sm font-medium text-archeohub-dark hover:text-archeohub-primary transition-colors">
            Pricing
          </a>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" 
            className="flex items-center space-x-1 button-primary">
            <span>Book a Free Consult</span>
            <ChevronRight size={16} />
          </a>
        </nav>
        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="md:hidden button-primary">
          <span className="flex items-center">
            Book Now
            <ChevronRight size={16} className="ml-1" />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
