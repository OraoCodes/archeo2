
import { ChevronRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-archeohub-primary text-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Stop Wasting Time on Bad Hires
          </h2>
          
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Get access to pre-vetted engineers who can start delivering value from day one. No risk, no long-term commitment.
          </p>
          
          <a 
            href="https://calendly.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-white text-archeohub-primary font-medium py-4 px-8 rounded-lg hover:bg-archeohub-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md active:translate-y-0.5"
          >
            <span>Start Your Trial Today</span>
            <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
