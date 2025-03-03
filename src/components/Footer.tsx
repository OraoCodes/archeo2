
import { Mail, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white border-t border-border">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/830ca3f1-695b-4953-90b1-be9d995f341c.png" 
                alt="Archeohub Logo" 
                className="h-[7.2rem] w-auto mb-2"
              />
              <p className="text-archeohub-muted text-sm mt-2">
                Built by founders, for founders.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a 
                href="mailto:contact@archeohub.com"
                className="flex items-center text-archeohub-muted hover:text-archeohub-primary transition-colors"
              >
                <Mail size={16} className="mr-2" />
                <span>contact@archeohub.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/company/archeohub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-archeohub-muted hover:text-archeohub-primary transition-colors"
              >
                <Linkedin size={16} className="mr-2" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="tel:+15551234567"
                className="flex items-center text-archeohub-muted hover:text-archeohub-primary transition-colors"
              >
                <Phone size={16} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-archeohub-muted">
            <p>&copy; {currentYear} Archeohub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
