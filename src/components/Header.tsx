import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useBanner } from '../contexts/BannerContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isBannerVisible } = useBanner();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top or scrolling up
      if (currentScrollY < 10) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isBannerVisible ? 'top-[60px]' : 'top-0'
      } ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur shadow-sm' : 'py-5 bg-transparent'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`} style={{ minHeight: '120px' }}>
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
              to="/resume-review"
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? 'text-archeohub-dark hover:text-archeohub-primary' 
                  : 'text-white hover:text-archeohub-accent drop-shadow-md'
              }`}
            >
              Resume Review
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
                to="/resume-review"
                className="block py-2 text-sm font-medium text-archeohub-dark hover:text-archeohub-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume Review
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
