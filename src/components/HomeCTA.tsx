import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-archeohub-primary text-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Build your team or build your career — the future of work begins here.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link 
              to="/contact"
              className="group inline-flex items-center bg-white text-archeohub-primary font-medium py-4 px-8 rounded-lg hover:bg-archeohub-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span>Get Started</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/for-talent"
              className="group inline-flex items-center border-2 border-white text-white font-medium py-4 px-8 rounded-lg hover:bg-white hover:text-archeohub-primary transition-all duration-300"
            >
              <span>Join as Talent</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;

