import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Target, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForStartups = () => {
  useEffect(() => {
    document.title = "For Startups - Archeohub";
  }, []);

  const benefits = [
    { icon: <Clock className="w-6 h-6" />, title: "Shortlist in days", description: "We deliver vetted, ready-to-interview candidates quickly — no months-long waits." },
    { icon: <Target className="w-6 h-6" />, title: "Technical & cultural evaluation", description: "Every candidate is screened for both technical depth and startup culture fit." },
    { icon: <Shield className="w-6 h-6" />, title: "Affordable and founder-friendly", description: "One-off placement model with transparent fees — no long-term lock-ins." },
    { icon: <Users className="w-6 h-6" />, title: "Hands-on support until onboarding", description: "We're with you through the entire process, ensuring a smooth transition." }
  ];

  const processSteps = [
    { number: 1, title: "Intake call", description: "We understand your needs, team culture, and technical requirements." },
    { number: 2, title: "We source & screen", description: "Our team finds and evaluates candidates using our rigorous quality standards." },
    { number: 3, title: "You interview top finalists", description: "Review our shortlist and interview the candidates that best fit your needs." },
    { number: 4, title: "You hire — we support onboarding", description: "Once you make your choice, we help ensure a seamless start." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>

        {/* Hero Section: Split Layout */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden min-h-[520px] flex justify-center">
          
          {/* Hero Card */}
          <div className="relative w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 rounded-3xl shadow-2xl overflow-hidden min-h-[520px] md:min-h-[620px] flex items-center">
            
            {/* Left: Content, Right: Image */}
            <div className="absolute inset-0 flex flex-col md:flex-row">
              {/* Content Side Gradient */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-r from-blue-800 to-transparent" />
              
              {/* Image Side */}
              <div
                className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
                }}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Content Card */}
            <div className="relative z-10 w-full md:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 text-left flex items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg">
                <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight text-white drop-shadow-lg">
                  Hiring your next engineer shouldn't take three months
                </h1>
                <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-md">
                  Building your founding team is one of the most important decisions you'll make. We help you source, evaluate, and place top talent — quickly and cost-effectively.
                </p>

                

                {/* Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg mt-2"
                >
                  <span>Request Candidates</span>
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title text-black">How We Help Startups</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                One-off placements designed for fast-moving founders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-700">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-black">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-black font-medium mb-4">
                Whether you need your <strong>first engineer</strong>, a <strong>product lead</strong>, or a <strong>multi-tasking operations generalist</strong>, we help you find the right fit.
              </p>
              <p className="text-xl font-bold text-blue-800">Hire once. Hire well.</p>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title text-black">Our Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A streamlined approach to finding your perfect hire.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-lg">{step.number}</div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold mb-2 text-black">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-800 text-white">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Ready to Find Your Next Hire?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
                Let's discuss your needs and get you connected with top talent.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-800 font-medium py-4 px-8 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-lg"
              >
                Request Candidates
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ForStartups;