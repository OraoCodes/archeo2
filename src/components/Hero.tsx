import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden min-h-[520px] flex justify-center">
      
      {/* Hero Card */}
      <div className="relative w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 rounded-3xl shadow-2xl overflow-hidden min-h-[520px] md:min-h-[620px] flex items-center">
        
        {/* Left: Gradient + Right: Image */}
        <div className="absolute inset-0 flex flex-col md:flex-row">
          {/* Gradient behind content */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-r from-blue-800 to-transparent" />
          
          {/* Image side */}
          <div
            className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Content Card */}
        <div className="relative z-10 w-full md:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 flex items-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg w-full">
            
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 drop-shadow-xl tracking-tight leading-tight text-white">
              Hire Fast. Hire Right
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md text-white/90">
              We connect ambitious talent with fast-growing startups and global companies — through recruitment, career development, and outsourced teams.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-start">
              <Link
                to="/outsourcing"
                className="px-8 sm:px-10 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform flex items-center justify-center"
              >
                For Companies <ArrowRight size={22} className="ml-2" />
              </Link>

              <Link
                to="/for-startups"
                className="px-8 sm:px-10 py-3 sm:py-4 bg-black text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-800 hover:scale-105 transition-transform flex items-center justify-center"
              >
                For Startups <ArrowRight size={22} className="ml-2" />
              </Link>

              <Link
                to="/for-talent"
                className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-2xl shadow-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all flex items-center justify-center"
              >
                For Talent <ArrowRight size={22} className="ml-2" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;