
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-archeohub-accent/5 to-transparent -z-10" />
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-archeohub-accent/10 text-archeohub-accent text-xs font-medium animate-fade-in">
            For Founders Who Value Time & Resources
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6 hero-text-shadow max-w-4xl mx-auto text-balance animate-fade-in-up">
            Hire Senior Engineers Risk-Free.
            <span className="block mt-2">Only Pay If They Deliver.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-archeohub-muted mb-8 max-w-2xl mx-auto text-balance animate-fade-in">
            Skip costly agency fees. Get pre-vetted engineers to prove their skills in a 4–6 week trial.
          </p>
          
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group button-primary text-base md:text-lg px-8 py-4 animate-fade-in"
          >
            <span className="flex items-center">
              Book a Free Consult
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <div className="mt-14 md:mt-20 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-archeohub-muted animate-fade-in">
            <div className="flex items-center">
              <div className="w-1 h-8 bg-archeohub-accent/20 rounded-full mr-3" />
              <span>No upfront agency fees</span>
            </div>
            <div className="flex items-center">
              <div className="w-1 h-8 bg-archeohub-accent/20 rounded-full mr-3" />
              <span>85% trial-to-hire success rate</span>
            </div>
            <div className="flex items-center">
              <div className="w-1 h-8 bg-archeohub-accent/20 rounded-full mr-3" />
              <span>Retain talent or get your money back</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
