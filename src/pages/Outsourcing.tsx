import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Shield, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Outsourcing = () => {
  useEffect(() => {
    document.title = "Outsourcing - Archeohub";
  }, []);

  const offerings = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated developers, analysts, QA, support",
      description: "Full-time team members embedded directly into your workflow."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Full HR, payroll, compliance & management",
      description: "We handle all administrative overhead so you can focus on building."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cost-effective and timezone-friendly",
      description: "Africa-based talent with global-level capability, aligned with EU/UK/US timezones."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High retention, low administrative load",
      description: "Focus on building. We'll handle the talent operations."
    }
  ];

  const processSteps = [
    { number: 1, title: "Talent planning", description: "We understand your needs, team structure, and growth goals." },
    { number: 2, title: "We hire & assemble the team", description: "Our team sources, screens, and builds your dedicated team." },
    { number: 3, title: "You manage them daily (or optional co-management)", description: "Team members work directly with you, integrated into your workflow." },
    { number: 4, title: "We handle the admin & performance support", description: "HR, payroll, compliance, and ongoing talent development are our responsibility." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section: Split Layout */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden min-h-[520px] flex justify-center">
          <div className="relative w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 rounded-3xl shadow-2xl overflow-hidden min-h-[520px] md:min-h-[620px] flex items-center">
            
            {/* Left: Text, Right: Image */}
            <div className="absolute inset-0 flex flex-col md:flex-row">
              {/* Gradient behind text */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-r from-archeohub-primary to-transparent" />
              {/* Image Side */}
              <div
                className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
                }}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Content Card */}
            <div className="relative z-10 w-full md:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 flex items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-lg">
                  Build Reliable Teams — Without Expanding Your Payroll
                </h1>
                <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-md">
                  For companies needing consistent capacity, we assemble dedicated teams who integrate seamlessly into your workflow.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg"
                >
                  <span>Explore Outsourcing Options</span>
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">What We Offer</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                End-to-end team building and management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {offerings.map((offering, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
                      {offering.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{offering.title}</h3>
                      <p className="text-gray-600">{offering.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From planning to execution, we handle the complexity.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="section-title">Scale Any Function</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you're scaling your engineering, customer support, QA, data, or product functions — we help you expand without the overhead.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-800 text-white">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Team?</h2>
              <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
                Let's discuss your team needs and explore how we can help you scale efficiently.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-blue-800 font-medium py-4 px-8 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>Explore Outsourcing Options</span>
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

export default Outsourcing;