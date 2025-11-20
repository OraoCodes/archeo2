import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional team collaboration" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-archeohub-dark/80 via-archeohub-dark/70 to-archeohub-dark/60" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-archeohub-primary/10 to-transparent" />
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6 text-white max-w-4xl mx-auto text-balance animate-fade-in-up drop-shadow-lg">
            Hire Fast. Hire Right.
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-balance animate-fade-in drop-shadow-md">
            We connect ambitious talent with fast-growing startups and global companies — through recruitment, career development, and outsourced teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link 
              to="/outsourcing"
              className="group button-primary text-base md:text-lg px-8 py-4 bg-white text-archeohub-primary hover:bg-archeohub-accent hover:text-white shadow-lg"
            >
              <span className="flex items-center">
                For Companies
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/for-startups"
              className="group button-primary text-base md:text-lg px-8 py-4 bg-white text-archeohub-primary hover:bg-archeohub-accent hover:text-white shadow-lg"
            >
              <span className="flex items-center">
                For Startups
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/for-talent"
              className="group inline-flex items-center border-2 border-white text-white font-medium text-base md:text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-archeohub-primary transition-all duration-300 shadow-lg"
            >
              <span className="flex items-center">
                For Talent
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
