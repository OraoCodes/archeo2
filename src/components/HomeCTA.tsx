import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white">
      <div className="px-6 lg:px-16 max-w-[1200px] mx-auto">

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build your team or build your career — the future of work begins here.
          </h2>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">

            {/* Primary Button */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-700 font-medium py-4 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition"
            >
              Get Started <ArrowRight size={20} className="ml-2" />
            </Link>

            {/* Secondary Button */}
            <Link
              to="/for-talent"
              className="inline-flex items-center justify-center border-2 border-white text-white font-medium py-4 px-8 rounded-xl hover:bg-white hover:text-blue-700 transition"
            >
              Join as Talent <ArrowRight size={20} className="ml-2" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeCTA;