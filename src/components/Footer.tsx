import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Phone, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    // TODO: Replace with actual newsletter signup endpoint
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Subscribed!",
      description: "Thank you for joining our mailing list.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };
  
  return (
    <footer className="py-12 bg-white border-t border-border">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Newsletter Section */}
          <div className="mb-12 pb-8 border-b border-border">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-bold mb-3">Follow the future of work — join our mailing list.</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto mt-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="button-primary"
                >
                  <Send size={18} />
                </Button>
              </form>
            </div>
          </div>

          {/* Links and Contact */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link to="/">
                <img 
                  src="/lovable-uploads/830ca3f1-695b-4953-90b1-be9d995f341c.png" 
                  alt="Archeohub Logo" 
                  className="h-[7.2rem] w-auto -my-4 -ml-3 mb-4" 
                />
              </Link>
              <p className="text-archeohub-muted text-sm">
                Connecting ambitious talent with fast-growing companies across the globe.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/for-talent" className="text-sm text-archeohub-muted hover:text-archeohub-primary transition-colors">
                    For Talent
                  </Link>
                </li>
                <li>
                  <Link to="/for-startups" className="text-sm text-archeohub-muted hover:text-archeohub-primary transition-colors">
                    For Startups
                  </Link>
                </li>
                <li>
                  <Link to="/outsourcing" className="text-sm text-archeohub-muted hover:text-archeohub-primary transition-colors">
                    Outsourcing
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-archeohub-muted hover:text-archeohub-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-archeohub-muted hover:text-archeohub-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:contact@archeohub.com"
                    className="flex items-center text-sm text-archeohub-muted hover:text-archeohub-primary transition-colors"
                  >
                    <Mail size={16} className="mr-2 text-archeohub-primary" />
                    <span>contact@archeohub.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+254743659514"
                    className="flex items-center text-sm text-archeohub-muted hover:text-archeohub-primary transition-colors"
                  >
                    <Phone size={16} className="mr-2 text-archeohub-primary" />
                    <span>+254 743 659 514</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/company/archeohub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-archeohub-muted hover:text-archeohub-primary transition-colors"
                  >
                    <Linkedin size={16} className="mr-2 text-archeohub-primary" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-archeohub-muted">
              <p>&copy; {currentYear} Archeohub. All rights reserved.</p>
              <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-archeohub-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-archeohub-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
