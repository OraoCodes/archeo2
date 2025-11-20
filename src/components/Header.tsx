import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur shadow-sm' : 'py-5 bg-transparent'
      }`}>
        <div className="container flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/830ca3f1-695b-4953-90b1-be9d995f341c.png" 
              alt="Archeohub Logo" 
              className="h-[7.2rem] w-auto -my-6"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/for-talent"
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? 'text-archeohub-dark hover:text-archeohub-primary' 
                  : 'text-white hover:text-archeohub-accent drop-shadow-md'
              }`}
            >
              For Talent
            </Link>
            <Link 
              to="/for-startups"
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? 'text-archeohub-dark hover:text-archeohub-primary' 
                  : 'text-white hover:text-archeohub-accent drop-shadow-md'
              }`}
            >
              For Startups
            </Link>
            <Link 
              to="/outsourcing"
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? 'text-archeohub-dark hover:text-archeohub-primary' 
                  : 'text-white hover:text-archeohub-accent drop-shadow-md'
              }`}
            >
              Outsourcing
            </Link>
            <Link 
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? 'text-archeohub-dark hover:text-archeohub-primary' 
                  : 'text-white hover:text-archeohub-accent drop-shadow-md'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className={`transition-all ${
                isScrolled 
                  ? 'button-primary' 
                  : 'bg-white text-archeohub-primary hover:bg-archeohub-accent hover:text-white font-medium py-2 px-6 rounded-lg shadow-lg'
              }`}
            >
              Contact
            </Link>
          </nav>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-archeohub-dark' : 'text-white drop-shadow-md'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg">
            <nav className="container py-4 space-y-3">
              <Link 
                to="/for-talent"
                className="block py-2 text-sm font-medium text-archeohub-dark hover:text-archeohub-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Talent
              </Link>
              <Link 
                to="/for-startups"
                className="block py-2 text-sm font-medium text-archeohub-dark hover:text-archeohub-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Startups
              </Link>
              <Link 
                to="/outsourcing"
                className="block py-2 text-sm font-medium text-archeohub-dark hover:text-archeohub-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Outsourcing
              </Link>
              <Link 
                to="/about"
                className="block py-2 text-sm font-medium text-archeohub-dark hover:text-archeohub-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact"
                className="block py-2 button-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
